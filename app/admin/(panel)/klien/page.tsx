import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import {
  Card,
  EditLink,
  Field,
  FormActions,
  PageTitle,
} from "@/components/admin/ui";
import { deleteClient, saveClient } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

export default async function AdminKlienPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string; new?: string }>;
}) {
  const params = await searchParams;
  const editId = Number.parseInt(params.edit ?? "", 10);
  const isNew = params.new === "1";

  const [clients, editing] = await Promise.all([
    prisma.client.findMany({ orderBy: { sortOrder: "asc" } }),
    Number.isFinite(editId) ? prisma.client.findUnique({ where: { id: editId } }) : null,
  ]);

  return (
    <>
      <PageTitle
        title="Klien"
        description="Nama klien yang tampil bergulir (marquee) di beranda."
      />

      {isNew || editing ? (
        <Card className="mb-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            {editing ? `Edit: ${editing.name}` : "Tambah Klien"}
          </h2>
          <form action={saveClient} className="space-y-5">
            <input type="hidden" name="id" value={editing?.id ?? 0} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nama Klien" name="name" defaultValue={editing?.name} required />
              <Field
                label="Urutan"
                name="sortOrder"
                type="number"
                defaultValue={editing?.sortOrder ?? clients.length}
              />
            </div>
            <FormActions cancelHref="/admin/klien" />
          </form>
        </Card>
      ) : (
        <div className="mb-6">
          <Link
            href="/admin/klien?new=1"
            className="inline-block cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            + Tambah Klien
          </Link>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {clients.map((client) => (
          <Card key={client.id} className="flex items-center gap-4 px-4 py-3">
            <span className="font-display text-sm font-semibold text-primary">
              {client.name}
            </span>
            <div className="flex items-center gap-2">
              <EditLink href={`/admin/klien?edit=${client.id}`} />
              <DeleteButton
                action={deleteClient}
                id={client.id}
                label={`klien "${client.name}"`}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
