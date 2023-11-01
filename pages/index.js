import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./home/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
