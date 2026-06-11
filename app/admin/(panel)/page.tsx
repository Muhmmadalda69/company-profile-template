import Link from "next/link";
import { Card, PageTitle } from "@/components/admin/ui";
import { prisma } from "@/lib/db";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MailOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="M22 10l-8 5.3a2 2 0 0 1-2.4 0L2 10" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default async function AdminDashboardPage() {
  const [serviceCount, teamCount, testimonialCount, unreadCount, latestMessages] =
    await Promise.all([
      prisma.service.count(),
      prisma.teamMember.count(),
      prisma.testimonial.count(),
      prisma.contactMessage.count({ where: { isRead: false } }),
      prisma.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  const summary = [
    {
      label: "Layanan",
      value: serviceCount,
      href: "/admin/layanan",
      icon: BriefcaseIcon,
      color: "text-blue-600 bg-blue-50/70 border-blue-100 hover:border-blue-300",
    },
    {
      label: "Anggota Tim",
      value: teamCount,
      href: "/admin/tim",
      icon: UsersIcon,
      color: "text-indigo-600 bg-indigo-50/70 border-indigo-100 hover:border-indigo-300",
    },
    {
      label: "Testimoni",
      value: testimonialCount,
      href: "/admin/testimoni",
      icon: MessageSquareIcon,
      color: "text-emerald-600 bg-emerald-50/70 border-emerald-100 hover:border-emerald-300",
    },
    {
      label: "Pesan Belum Dibaca",
      value: unreadCount,
      href: "/admin/pesan",
      icon: MailIcon,
      color: "text-rose-600 bg-rose-50/70 border-rose-100 hover:border-rose-300",
    },
  ];

  return (
    <>
      <PageTitle
        title="Dashboard"
        description="Ringkasan konten website dan pesan masuk terbaru."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link key={item.label} href={item.href} className="group">
              <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-slate-100 hover:border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {item.label}
                    </p>
                  </div>
                  <div className={`rounded-2xl p-3 transition-all duration-300 group-hover:scale-110 ${item.color.split(" ").slice(0, 2).join(" ")}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-primary">
              Pesan Terbaru
            </h2>
            <Link
              href="/admin/pesan"
              className="group flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              <span>Lihat semua</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          {latestMessages.length === 0 ? (
            <p className="mt-4 text-sm text-muted">Belum ada pesan masuk.</p>
          ) : (
            <ul className="mt-4 divide-y divide-slate-100">
              {latestMessages.map((message: ContactMessage) => (
                <li
                  key={message.id}
                  className={`group/item flex items-start gap-4 py-3.5 px-3 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:translate-x-1 ${
                    !message.isRead
                      ? "bg-accent/[0.03] border-l-2 border-accent pl-2.5"
                      : "border-l-2 border-transparent"
                  }`}
                >
                  <div className="relative mt-0.5 shrink-0">
                    {!message.isRead ? (
                      <>
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <div className="rounded-lg bg-accent/10 p-2 text-accent transition-transform duration-300 group-hover/item:scale-110">
                          <MailIcon className="h-4 w-4" />
                        </div>
                      </>
                    ) : (
                      <div className="rounded-lg bg-slate-100 p-2 text-slate-400 transition-transform duration-300 group-hover/item:scale-110">
                        <MailOpenIcon className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-primary group-hover/item:text-accent transition-colors duration-200">
                        {message.subject}
                      </p>
                      <span className="shrink-0 text-[10px] font-medium text-slate-400">
                        {message.createdAt.toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <p className="truncate text-xs text-slate-500 mt-0.5">
                      Dari: <span className="font-medium text-slate-700">{message.name}</span> &middot; {message.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}
