"use client";

interface DeleteButtonProps {
  action: (formData: FormData) => Promise<void>;
  id: number;
  label?: string;
}

export default function DeleteButton({ action, id, label = "item ini" }: DeleteButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!window.confirm(`Yakin ingin menghapus ${label}? Tindakan ini tidak bisa dibatalkan.`)) {
          event.preventDefault();
        }
      }}
      className="inline"
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="cursor-pointer rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors duration-200 hover:bg-red-50"
      >
        Hapus
      </button>
    </form>
  );
}
