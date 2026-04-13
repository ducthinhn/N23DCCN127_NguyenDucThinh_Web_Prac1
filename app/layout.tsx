import "./globals.css";
import Header from "../components/Header";
import { Inter } from "next/font/google"; // Font phổ biến của Next.js

// Cấu hình font chữ
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyBlog - Khám phá thế giới",
  description: "Blog chia sẻ kiến thức công nghệ và cuộc sống",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header cố định ở trên cùng */}
        <Header />

        {/* Phần nội dung chính */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer đơn giản */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-200 mt-12">
          <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}