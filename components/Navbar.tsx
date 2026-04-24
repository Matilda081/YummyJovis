import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="text-2xl font-bold text-center sm:text-left">YummyJovis😋</Link>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-pink-200 transition">Home</Link>
          <Link href="/blogs" className="hover:text-pink-200 transition">Blogs</Link>
          <Link href="/about" className="hover:text-pink-200 transition">About us</Link>
          <Link href="/services" className="hover:text-pink-200 transition">Services</Link>
          <Link href="/testimonies" className="hover:text-pink-200 transition">Testimony</Link>
        </div>
      </div>
    </nav>
  )
}