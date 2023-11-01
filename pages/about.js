import Image from "next/image";
import { Inter } from "next/font/google";
import AboutPage from "./about/page";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
