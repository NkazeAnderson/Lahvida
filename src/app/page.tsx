import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen">
      <p>Home Screen</p>
      <Link href={"/dashboard"}>
        <button>Dashboard</button>
      </Link>
    </main>
  );
}
