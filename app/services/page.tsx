export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">

        <h1 className="text-2xl sm:text-4xl font-bold text-pink-600">
          Our Services
        </h1>

        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          We offer premium bakery services for all your sweet cravings and events.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-bold text-pink-600">🎂 Cakes</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Birthday, wedding, and custom cakes made fresh.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-bold text-pink-600">🍪 Snacks</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Delicious chin chin, cookies, and pastries.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-bold text-pink-600">🚚 Delivery</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Fast and reliable doorstep delivery service.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}