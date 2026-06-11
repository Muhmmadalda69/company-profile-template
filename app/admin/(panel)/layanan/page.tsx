import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import {
  Card,
  EditLink,
  Field,
  FormActions,
  PageTitle,
  PublishedToggle,
  TextArea,
} from "@/components/admin/ui";
import { deleteService, saveService } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

const ICON_OPTIONS = [
  "code", "cloud", "shield", "chart", "mobile", "cog",
  "spark", "users", "target", "heart", "globe", "rocket",
];

export default async function AdminLayananPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string; new?: string }>;
}) {
  const params = await searchParams;
  const editId = Number.parseInt(params.edit ?? "", 10);
  const isNew = params.new === "1";

  const [services, editing] = await Promise.all([
    prisma.service.findMany({ orderBy: { sortOrder: "asc" } }),
    Number.isFinite(editId)
      ? prisma.service.findUnique({ where: { id: editId } })
      : null,
  ]);

  const showForm = isNew || editing;

  return (
    <>
      <PageTitle title="Layanan" description="Kelola layanan yang tampil di website." />

      {showForm ? (
        <Card className="mb-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            {editing ? `Edit: ${editing.title}` : "Tambah Layanan Baru"}
          </h2>
          <form action={saveService} className="space-y-5">
            <input type="hidden" name="id" value={editing?.id ?? 0} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Judul" name="title" defaultValue={editing?.title} required />
              <Field
                label="Slug (URL)"
                name="slug"
                defaultValue={editing?.slug}
                hint="Kosongkan untuk dibuat otomatis dari judul."
              />
            </div>
            <TextArea
              label="Deskripsi Singkat"
              name="description"
              rows={2}
              defaultValue={editing?.description}
              required
              hint="Tampil di kartu layanan beranda (maks. 300 karakter)."
            />
            <TextArea
              label="Deskripsi Lengkap"
              name="longDescription"
              rows={4}
              defaultValue={editing?.longDescription}
              hint="Tampil di halaman detail layanan."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="icon" className="mb-1.5 block text-sm font-semibold text-primary">
                  Ikon
                </label>
                <select
                  id="icon"
                  name="icon"
                  defaultValue={editing?.icon ?? "code"}
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-2 focus:outline-accent/30"
                >
                  {ICON_OPTIONS.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </div>
              <Field
                label="Urutan"
                name="sortOrder"
                type="number"
                defaultValue={editing?.sortOrder ?? services.length}
              />
            </div>
            <TextArea
              label="Fitur (satu per baris)"
              name="features"
              rows={4}
              defaultValue={
                editing ? (JSON.parse(editing.features) as string[]).join("\n") : ""
              }
            />
            <PublishedToggle defaultChecked={editing?.published ?? true} />
            <FormActions cancelHref="/admin/layanan" />
          </form>
        </Card>
      ) : (
        <div className="mb-6">
          <Link
            href="/admin/layanan?new=1"
            className="inline-block cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            + Tambah Layanan
          </Link>
        </div>
      )}

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-surface text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Urutan</th>
              <th className="px-5 py-3 font-semibold">Judul</th>
              <th className="px-5 py-3 font-semibold">Slug</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 text-right font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="px-5 py-3 text-muted">{service.sortOrder}</td>
                <td className="px-5 py-3 font-medium text-primary">{service.title}</td>
                <td className="px-5 py-3 text-muted">{service.slug}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      service.published
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {service.published ? "Tayang" : "Draf"}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <EditLink href={`/admin/layanan?edit=${service.id}`} />
                    <DeleteButton
                      action={deleteService}
                      id={service.id}
                      label={`layanan "${service.title}"`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
