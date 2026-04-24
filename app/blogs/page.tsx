import Link from "next/link";


const blogs = [
{
id: 1,
title: "Top 5 Birthday Cakes",
description: "Best cakes for birthday events",
},
{
id: 2,
title: "Healthy Snacks",
description: "Fresh snacks for office workers",
},
{
id: 3,
title: "Wedding Cakes",
description: "Luxury cakes for weddings",
},
];

export default function BlogPage() {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
        Our Blogs
      </h1>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link 
          key={blog.id}
          href={`/blogs/${blog.id}`}
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}