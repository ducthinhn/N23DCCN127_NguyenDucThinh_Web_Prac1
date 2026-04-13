import BlogCard from "../components/BlogCard";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header của trang */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Blog Posts
          </h1>
          <p className="text-lg text-gray-600">
            Khám phá những bài viết mới nhất được cập nhật mỗi ngày.
          </p>
        </div>

        {/* Grid hiển thị bài viết */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 12).map((post) => (
            <div
              key={post.id}
              className="transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}