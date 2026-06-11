import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { clients, services, stats, team, testimonials } from "../lib/data";
import { defaultSettings } from "../lib/settings-keys";

const prisma = new PrismaClient();

async function main() {
  // --- Admin user ---
  const email = process.env.ADMIN_EMAIL ?? "admin@ruangcode.co.id";
  const password = process.env.ADMIN_PASSWORD ?? "RuangCode#2026";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash, name: "Administrator" },
  });

  // --- Layanan ---
  for (const [index, service] of services.entries()) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        slug: service.slug,
        title: service.title,
        description: service.description,
        longDescription: service.longDescription,
        icon: service.icon,
        features: JSON.stringify(service.features),
        sortOrder: index,
      },
    });
  }

  // --- Tim, Testimoni, Statistik, Klien (hanya jika kosong) ---
  if ((await prisma.teamMember.count()) === 0) {
    await prisma.teamMember.createMany({
      data: team.map((member, index) => ({ ...member, sortOrder: index })),
    });
  }

  if ((await prisma.testimonial.count()) === 0) {
    await prisma.testimonial.createMany({
      data: testimonials.map((item, index) => ({ ...item, sortOrder: index })),
    });
  }

  if ((await prisma.stat.count()) === 0) {
    await prisma.stat.createMany({
      data: stats.map((stat, index) => ({ ...stat, sortOrder: index })),
    });
  }

  if ((await prisma.client.count()) === 0) {
    await prisma.client.createMany({
      data: clients.map((name, index) => ({ name, sortOrder: index })),
    });
  }

  // --- Konten landing page ---
  for (const [key, value] of Object.entries(defaultSettings)) {
    await prisma.siteSetting.upsert({
      where: { key },
      update: {},
      create: { key, value },
    });
  }

  console.log("Seed selesai.");
  console.log(`Login admin: ${email}`);
  if (!process.env.ADMIN_PASSWORD) {
    console.log(`Password default: ${password} — SEGERA GANTI di halaman /admin/akun`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
