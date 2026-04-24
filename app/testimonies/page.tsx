
export default function Testimony() {
  return (
    <div className="p-4 sm:p-8 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center">
        Customer Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-700">
             “Best cakes I’ve ever tasted in Enugu!”⭐⭐⭐⭐⭐
          </p>
          <p className="mt-2 text-sm text-pink-600 font-semibold">
            — Frank
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-700">
             “Their chin chin is super crunchy and addictive.” ⭐⭐⭐⭐⭐
          </p>
          <p className="mt-2 text-sm text-pink-600 font-semibold">
            — Chinecherem
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-700">
             “Fast delivery and amazing customer service!”⭐⭐⭐⭐⭐
          </p>
          <p className="mt-2 text-sm text-pink-600 font-semibold">
            — Amara
          </p>
        </div>

      </div>
    </div>
  );
}