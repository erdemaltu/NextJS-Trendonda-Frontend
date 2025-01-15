import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="bg-red-600">
        Anasayfa
        </div>
        <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/category">Categoriler</Link>
        </div>
    </>
  );
}
