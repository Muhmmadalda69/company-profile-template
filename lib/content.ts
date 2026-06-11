import { cache } from "react";
import { prisma } from "./db";
import { defaultSettings, type SettingKey } from "./settings-keys";
import type { IconName, Service, Stat, TeamMember, Testimonial } from "./types";

export const getServices = cache(async (): Promise<Service[]> => {
  const rows = await prisma.service.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map((row) => ({
    slug: row.slug,
    title: row.title,
    description: row.description,
    longDescription: row.longDescription,
    icon: row.icon as IconName,
    features: JSON.parse(row.features) as string[],
  }));
});

export const getTeam = cache(async (): Promise<TeamMember[]> => {
  const rows = await prisma.teamMember.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map(({ name, role, bio }) => ({ name, role, bio }));
});

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const rows = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map(({ quote, name, role, company }) => ({ quote, name, role, company }));
});

export const getStats = cache(async (): Promise<Stat[]> => {
  const rows = await prisma.stat.findMany({ orderBy: { sortOrder: "asc" } });
  return rows.map(({ value, suffix, label }) => ({ value, suffix, label }));
});

export const getClients = cache(async (): Promise<string[]> => {
  const rows = await prisma.client.findMany({ orderBy: { sortOrder: "asc" } });
  return rows.map((row) => row.name);
});

export const getSettings = cache(
  async (): Promise<Record<SettingKey, string>> => {
    const rows = await prisma.siteSetting.findMany();
    const stored = Object.fromEntries(rows.map((row) => [row.key, row.value]));
    return { ...defaultSettings, ...stored };
  }
);
