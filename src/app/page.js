import Image from "next/image";
import styles from "./globals.css";
import SocialLink from "../../components/socialink";
import Button from "../../components/button";
import Links from "../../components/links";


export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white">
      <div className="flex flex-col items-center">
        <div className="my-4">
          <Image
            src="/next.svg"
            alt="Profile-Pic"
            width={300}
            height={300}
            className="rounded-lg border-2 border-black"
          />
        </div>
        <Image
            src="/profilepic.jpg"
            alt="Profile-Pic"
            width={200}
            height={200}
            className="rounded-full border-2 border-black"
          />
        <div className="my-4 text-center">
          <h1 className="text-5xl font-bold text-gray-200 mb-2">
            Ram Prakhyath A
          </h1>
          <p className="text-2xl text-gray-300">
            Python and Next.js Rookie
          </p>
        </div>
      </div>
      <div className="my-8 flex space-x-4">
        <Links
          href="/about"
          text="About"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
        />
        <Links
          href="/projects"
          text="Projects"
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors duration-300"
        />
      </div>
      <footer className="mt-auto mb-4 text-center">
        <div className="my-8">
          <SocialLink
          href="https://www.linkedin.com/in/ram-prakhyath-annamreddy-51996b291/"
          text="LinkedIn"
          />
          <SocialLink
          href="https://github.com/RamPrakhyath05"
          text="GitHub"
          />
        </div>
      </footer>
    </div>
  );
}
