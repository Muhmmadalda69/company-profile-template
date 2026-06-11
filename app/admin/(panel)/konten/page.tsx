import { Card, FormActions, PageTitle } from "@/components/admin/ui";
import { saveSettings } from "@/lib/actions/admin";
import { getSettings } from "@/lib/content";
import {
  defaultSettings,
  settingLabels,
  settingMultiline,
  type SettingKey,
} from "@/lib/settings-keys";

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-accent focus:outline-2 focus:outline-accent/30";

export default async function AdminKontenPage() {
  const settings = await getSettings();
  const keys = Object.keys(defaultSettings) as SettingKey[];

  return (
    <>
      <PageTitle
        title="Konten Landing Page"
        description="Atur teks hero dan banner CTA yang tampil di beranda."
      />

      <Card className="max-w-3xl">
        <form action={saveSettings} className="space-y-5">
          {keys.map((key) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                {settingLabels[key]}
              </label>
              {settingMultiline[key] ? (
                <textarea
                  id={key}
                  name={key}
                  rows={3}
                  defaultValue={settings[key]}
                  className={`${inputClasses} resize-y`}
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type="text"
                  defaultValue={settings[key]}
                  className={inputClasses}
                />
              )}
            </div>
          ))}
          <FormActions cancelHref="/admin" />
        </form>
      </Card>
    </>
  );
}
