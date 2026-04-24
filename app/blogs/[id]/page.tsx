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

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogDetails({ params }: Props) {
   const {id} = await params;
  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <div className="p-4 sm:p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-pink-600">{blog.title}</h1>
      <p className="mt-4 text-gray-700 text-sm sm:text-base">{blog.description}</p>
    </div>
  );
}