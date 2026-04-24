import Link from "next/link";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-pink-100 border-b border-pink-200">
        <div className="max-w-4xl mx-auto flex justify-center gap-6 py-3 text-sm font-medium">
        <Link href="/services" className="text-pink-600 hover:text-pink-800 transition">All Services</Link>
        <Link href="/services/baking" className="text-pink-600 hover:text-pink-800 transition">Baking</Link>
        <Link href="/services/delivery" className="text-pink-600 hover:text-pink-800 transition">Delivery</Link>
        </div>
      </nav>
      <div className="p-6">{children}</div> 
      </div>
  )
}