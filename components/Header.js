import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
                    MyBlog
                </Link>

                {/* Navigation */}
                <nav className="space-x-8 hidden md:flex font-medium text-gray-600">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/articles" className="hover:text-indigo-600 transition-colors">
                        Articles
                    </Link>
                    <Link href="/about" className="hover:text-indigo-600 transition-colors">
                        About
                    </Link>
                </nav>

                {/* Call to Action */}
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200">
                    Subscribe
                </button>
            </div>
        </header>
    );
}