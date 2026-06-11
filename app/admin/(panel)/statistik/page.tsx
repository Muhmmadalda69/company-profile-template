import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import {
  Card,
  EditLink,
  Field,
  FormActions,
  PageTitle,
} from "@/components/admin/ui";
import { deleteStat, saveStat } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

export default async function AdminStatistikPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string; new?: string }>;
}) {
  const params = await searchParams;
  const editId = Number.parseInt(params.edit ?? "", 10);
  const isNew = params.new === "1";

  const [stats, editing] = await Promise.all([
    prisma.stat.findMany({ orderBy: { sortOrder: "asc" } }),
    Number.isFinite(editId) ? prisma.stat.findUnique({ where: { id: editId } }) : null,
  ]);

  return (
    <>
      <PageTitle
        title="Statistik"
        description="Angka pencapaian yang tampil dengan animasi hitung naik di beranda."
      />

      {isNew || editing ? (
        <Card className="mb-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            {editing ? `Edit: ${editing.label}` : "Tambah Statistik"}
          </h2>
          <form action={saveStat} className="space-y-5">
            <input type="hidden" name="id" value={editing?.id ?? 0} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Field
                label="Nilai"
                name="value"
                type="number"
                defaultValue={editing?.value}
                required
              />
              <Field
                label="Sufiks"
                name="suffix"
                defaultValue={editing?.suffix}
                hint='Contoh: "+", "%"'
              />
              <Field label="Label" name="label" defaultValue={editing?.label} required />
              <Field
                label="Urutan"
                name="sortOrder"
                type="number"
                defaultValue={editing?.sortOrder ?? stats.length}
              />
            </div>
            <FormActions cancelHref="/admin/statistik" />
          </form>
        </Card>
      ) : (
        <div className="mb-6">
          <Link
            href="/admin/statistik?new=1"
            className="inline-block cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            + Tambah Statistik
          </Link>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.id}>
            <p className="font-display text-3xl font-bold text-primary">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
            <div className="mt-4 flex items-center gap-2">
              <EditLink href={`/admin/statistik?edit=${stat.id}`} />
              <DeleteButton
                action={deleteStat}
                id={stat.id}
                label={`statistik "${stat.label}"`}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
