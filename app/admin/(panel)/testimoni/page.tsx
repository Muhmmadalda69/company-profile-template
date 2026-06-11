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
import { deleteTestimonial, saveTestimonial } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

export default async function AdminTestimoniPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string; new?: string }>;
}) {
  const params = await searchParams;
  const editId = Number.parseInt(params.edit ?? "", 10);
  const isNew = params.new === "1";

  const [testimonials, editing] = await Promise.all([
    prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } }),
    Number.isFinite(editId)
      ? prisma.testimonial.findUnique({ where: { id: editId } })
      : null,
  ]);

  return (
    <>
      <PageTitle
        title="Testimoni"
        description="Kelola testimoni klien yang tampil di beranda."
      />

      {isNew || editing ? (
        <Card className="mb-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            {editing ? `Edit testimoni dari ${editing.name}` : "Tambah Testimoni"}
          </h2>
          <form action={saveTestimonial} className="space-y-5">
            <input type="hidden" name="id" value={editing?.id ?? 0} />
            <TextArea
              label="Kutipan"
              name="quote"
              rows={3}
              defaultValue={editing?.quote}
              required
            />
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Nama" name="name" defaultValue={editing?.name} required />
              <Field label="Jabatan" name="role" defaultValue={editing?.role} />
              <Field label="Perusahaan" name="company" defaultValue={editing?.company} />
            </div>
            <Field
              label="Urutan"
              name="sortOrder"
              type="number"
              defaultValue={editing?.sortOrder ?? testimonials.length}
            />
            <PublishedToggle defaultChecked={editing?.published ?? true} />
            <FormActions cancelHref="/admin/testimoni" />
          </form>
        </Card>
      ) : (
        <div className="mb-6">
          <Link
            href="/admin/testimoni?new=1"
            className="inline-block cursor-pointer rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            + Tambah Testimoni
          </Link>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <p className="text-sm leading-6 text-secondary">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
                <p className="text-xs text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
                <span
                  className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    testimonial.published
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {testimonial.published ? "Tayang" : "Draf"}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <EditLink href={`/admin/testimoni?edit=${testimonial.id}`} />
                <DeleteButton
                  action={deleteTestimonial}
                  id={testimonial.id}
                  label={`testimoni dari "${testimonial.name}"`}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
