import SessionManager from '@/components/admin/SessionManager';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* El vigilante se carga en todas las páginas de /admin */}
      <SessionManager />
      {children}
    </>
  );
}