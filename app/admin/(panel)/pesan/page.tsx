import DeleteButton from "@/components/admin/DeleteButton";
import { Card, PageTitle } from "@/components/admin/ui";
import { deleteMessage, toggleMessageRead } from "@/lib/actions/admin";
import { prisma } from "@/lib/db";

export default async function AdminPesanPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <PageTitle
        title="Pesan Masuk"
        description="Pesan yang dikirim melalui formulir kontak website."
      />

      {messages.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">Belum ada pesan masuk.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={message.isRead ? "" : "border-accent/40 bg-accent-soft/30"}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    {!message.isRead && (
                      <span
                        className="h-2 w-2 rounded-full bg-accent"
                        aria-label="Belum dibaca"
                      />
                    )}
                    <h2 className="font-display text-base font-semibold text-primary">
                      {message.subject}
                    </h2>
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    {message.name} &middot;{" "}
                    <a
                      href={`mailto:${message.email}`}
                      className="text-accent hover:underline"
                    >
                      {message.email}
                    </a>{" "}
                    &middot;{" "}
                    {message.createdAt.toLocaleString("id-ID", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <form action={toggleMessageRead}>
                    <input type="hidden" name="id" value={message.id} />
                    <button
                      type="submit"
                      className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-secondary transition-colors duration-200 hover:bg-slate-100"
                    >
                      {message.isRead ? "Tandai belum dibaca" : "Tandai dibaca"}
                    </button>
                  </form>
                  <DeleteButton
                    action={deleteMessage}
                    id={message.id}
                    label={`pesan "${message.subject}"`}
                  />
                </div>
              </div>
              <p className="mt-4 whitespace-pre-line text-sm leading-6 text-secondary">
                {message.message}
              </p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
