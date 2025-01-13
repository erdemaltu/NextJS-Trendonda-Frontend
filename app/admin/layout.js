import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 p-4 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Admin Paneli</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/admin" className="text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/categories" className="text-blue-500">
                Kategoriler
              </Link>
            </li>
            <li>
              <Link href="/admin/contents" className="text-blue-500">
                İçerikler
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
