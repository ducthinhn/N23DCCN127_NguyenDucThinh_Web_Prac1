import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Hàm lấy dữ liệu
async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 3600 } // Cache dữ liệu trong 1 tiếng
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) notFound();

    return (
        <article className="max-w-3xl mx-auto py-16 px-6">
            {/* Navigation */}
            <Link
                href="/"
                className="inline-flex items-center mb-10 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
            >
                <span className="mr-2">←</span> Back to Blog
            </Link>

            {/* Header bài viết */}
            <header className="mb-10">
                <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">
                    Article #{post.id}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight capitalize">
                    {post.title}
                </h1>

                {/* Meta info giả lập */}
                <div className="flex items-center text-gray-500 text-sm">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 mr-4">
                        U{post.userId}
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Author ID: {post.userId}</p>
                        <p>Published on April 13, 2026</p>
                    </div>
                </div>
            </header>

            {/* Nội dung bài viết */}
            <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-8">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
                    {post.body}
                </p>
                <p className="mt-6">{post.body}</p>
                <p className="mt-6">{post.body}</p>
            </div>

            {/* Footer bài viết */}
            <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Enjoyed this article?</h3>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                    Subscribe for more
                </button>
            </div>
        </article>
    );
}