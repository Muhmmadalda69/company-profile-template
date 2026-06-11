"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { defaultSettings, type SettingKey } from "@/lib/settings-keys";

const ICONS = [
  "code", "cloud", "shield", "chart", "mobile", "cog",
  "spark", "users", "target", "heart", "globe", "rocket",
];

async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}

function text(formData: FormData, key: string, maxLength = 500): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function intVal(formData: FormData, key: string, fallback = 0): number {
  const parsed = Number.parseInt(String(formData.get(key) ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function revalidatePublic() {
  revalidatePath("/", "layout");
}

// ---------- Layanan ----------

export async function saveService(formData: FormData): Promise<void> {
  await requireSession();

  const id = intVal(formData, "id", 0);
  const title = text(formData, "title", 100);
  const slug =
    text(formData, "slug", 100)
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/(^-|-$)/g, "") ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const icon = text(formData, "icon", 20);
  const features = text(formData, "features", 2000)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const data = {
    slug,
    title,
    description: text(formData, "description", 300),
    longDescription: text(formData, "longDescription", 2000),
    icon: ICONS.includes(icon) ? icon : "code",
    features: JSON.stringify(features),
    sortOrder: intVal(formData, "sortOrder"),
    published: formData.get("published") === "on",
  };

  if (!data.title || !data.description) return;

  if (id > 0) {
    await prisma.service.update({ where: { id }, data });
  } else {
    await prisma.service.create({ data });
  }
  revalidatePublic();
  redirect("/admin/layanan");
}

export async function deleteService(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.service.delete({ where: { id: intVal(formData, "id") } });
  revalidatePublic();
  redirect("/admin/layanan");
}

// ---------- Tim ----------

export async function saveTeamMember(formData: FormData): Promise<void> {
  await requireSession();

  const id = intVal(formData, "id", 0);
  const data = {
    name: text(formData, "name", 100),
    role: text(formData, "role", 100),
    bio: text(formData, "bio", 500),
    sortOrder: intVal(formData, "sortOrder"),
    published: formData.get("published") === "on",
  };
  if (!data.name || !data.role) return;

  if (id > 0) {
    await prisma.teamMember.update({ where: { id }, data });
  } else {
    await prisma.teamMember.create({ data });
  }
  revalidatePublic();
  redirect("/admin/tim");
}

export async function deleteTeamMember(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.teamMember.delete({ where: { id: intVal(formData, "id") } });
  revalidatePublic();
  redirect("/admin/tim");
}

// ---------- Testimoni ----------

export async function saveTestimonial(formData: FormData): Promise<void> {
  await requireSession();

  const id = intVal(formData, "id", 0);
  const data = {
    quote: text(formData, "quote", 1000),
    name: text(formData, "name", 100),
    role: text(formData, "role", 100),
    company: text(formData, "company", 100),
    sortOrder: intVal(formData, "sortOrder"),
    published: formData.get("published") === "on",
  };
  if (!data.quote || !data.name) return;

  if (id > 0) {
    await prisma.testimonial.update({ where: { id }, data });
  } else {
    await prisma.testimonial.create({ data });
  }
  revalidatePublic();
  redirect("/admin/testimoni");
}

export async function deleteTestimonial(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.testimonial.delete({ where: { id: intVal(formData, "id") } });
  revalidatePublic();
  redirect("/admin/testimoni");
}

// ---------- Statistik ----------

export async function saveStat(formData: FormData): Promise<void> {
  await requireSession();

  const id = intVal(formData, "id", 0);
  const data = {
    value: intVal(formData, "value"),
    suffix: text(formData, "suffix", 5),
    label: text(formData, "label", 100),
    sortOrder: intVal(formData, "sortOrder"),
  };
  if (!data.label) return;

  if (id > 0) {
    await prisma.stat.update({ where: { id }, data });
  } else {
    await prisma.stat.create({ data });
  }
  revalidatePublic();
  redirect("/admin/statistik");
}

export async function deleteStat(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.stat.delete({ where: { id: intVal(formData, "id") } });
  revalidatePublic();
  redirect("/admin/statistik");
}

// ---------- Klien ----------

export async function saveClient(formData: FormData): Promise<void> {
  await requireSession();

  const id = intVal(formData, "id", 0);
  const data = {
    name: text(formData, "name", 100),
    sortOrder: intVal(formData, "sortOrder"),
  };
  if (!data.name) return;

  if (id > 0) {
    await prisma.client.update({ where: { id }, data });
  } else {
    await prisma.client.create({ data });
  }
  revalidatePublic();
  redirect("/admin/klien");
}

export async function deleteClient(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.client.delete({ where: { id: intVal(formData, "id") } });
  revalidatePublic();
  redirect("/admin/klien");
}

// ---------- Konten Landing Page ----------

export async function saveSettings(formData: FormData): Promise<void> {
  await requireSession();

  for (const key of Object.keys(defaultSettings) as SettingKey[]) {
    const value = text(formData, key, 1000);
    if (!value) continue;
    await prisma.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
  revalidatePublic();
  redirect("/admin/konten");
}

// ---------- Pesan ----------

export async function toggleMessageRead(formData: FormData): Promise<void> {
  await requireSession();
  const id = intVal(formData, "id");
  const message = await prisma.contactMessage.findUnique({ where: { id } });
  if (message) {
    await prisma.contactMessage.update({
      where: { id },
      data: { isRead: !message.isRead },
    });
  }
  revalidatePath("/admin/pesan");
}

export async function deleteMessage(formData: FormData): Promise<void> {
  await requireSession();
  await prisma.contactMessage.delete({ where: { id: intVal(formData, "id") } });
  revalidatePath("/admin/pesan");
}
