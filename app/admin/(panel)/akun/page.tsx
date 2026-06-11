import PasswordForm from "@/components/admin/PasswordForm";
import { Card, PageTitle } from "@/components/admin/ui";
import { getSession } from "@/lib/auth";

export default async function AdminAkunPage() {
  const session = await getSession();

  return (
    <>
      <PageTitle title="Akun" description="Pengaturan akun administrator." />

      <div className="grid max-w-3xl gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-lg font-semibold text-primary">Profil</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-muted">Nama</dt>
              <dd className="text-primary">{session?.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-muted">Email</dt>
              <dd className="text-primary">{session?.email}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="mb-5 font-display text-lg font-semibold text-primary">
            Ganti Password
          </h2>
          <PasswordForm />
        </Card>
      </div>
    </>
  );
}
