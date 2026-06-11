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
import { deleteTeamMember, saveTeamMember } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

export default async function AdminTimPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string; new?: string }>;
}) {
  const params = await searchParams;
  const editId = Number.parseInt(params.edit ?? "", 10);
  const isNew = params.new === "1";

  const [members, editing] = await Promise.all([
    prisma.teamMember.findMany({ orderBy: { sortOrder: "asc" } }),
    Number.isFinite(editId)
      ? prisma.teamMember.findUnique({ where: { id: editId } })
      : null,
  ]);

  return (
    <>
      <PageTitle title="Tim" description="Kelola anggota tim di halaman Tentang Kami." />

      {isNew || editing ? (
        <Card className="mb-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            {editing ? `Edit: ${editing.name}` : "Tambah Anggota Tim"}
          </h2>
          <form action={saveTeamMember} className="space-y-5">
            <input type="hidden" name="id" value={editing?.id ?? 0} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nama" name="name" defaultValue={editing?.name} required />
              <Field label="Jabatan" name="role" defaultValue={editing?.role} required />
            </div>
            <TextArea label="Bio Singkat" name="bio" rows={3} defaultValue={editing?.bio} />
            <Field
              label="Urutan"
              name="sortOrder"
              type="number"
              defaultValue={editing?.sortOrder ?? members.length}
            />
            <PublishedToggle defaultChecked={editing?.published ?? true} />
            <FormActions cancelHref="/admin/tim" />
          </form>
        </Card>
      ) : (
        <div className="mb-6">
          <Link
            href="/admin/tim?new=1"
            className="inline-block cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            + Tambah Anggota
          </Link>
        </div>
      )}

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-surface text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Urutan</th>
              <th className="px-5 py-3 font-semibold">Nama</th>
              <th className="px-5 py-3 font-semibold">Jabatan</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 text-right font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-5 py-3 text-muted">{member.sortOrder}</td>
                <td className="px-5 py-3 font-medium text-primary">{member.name}</td>
                <td className="px-5 py-3 text-muted">{member.role}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      member.published
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {member.published ? "Tayang" : "Draf"}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <EditLink href={`/admin/tim?edit=${member.id}`} />
                    <DeleteButton
                      action={deleteTeamMember}
                      id={member.id}
                      label={`anggota "${member.name}"`}
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
