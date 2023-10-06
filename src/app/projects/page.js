import Image from "next/image";
import styles from "../globals.css";
import SocialLink from "../../../components/socialink";
import Button from "../../../components/button";
import Links from "../../../components/links";

export default function About() {
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
        <div className="my-4 text-center">
            <h1 className="text-5xl font-bold text-gray-200 mb-2">
            Ram Prakhyath A
            </h1>
            <p className="text-xl text-gray-300">
            I have done the following projects with this course:
            <br/>
            <a href='https://github.com/RamPrakhyath05/Next.js-13-PESU_IO-2023/tree/main/Submissions/Assignment%201/PES2202300355%20-%20Ram%20Prakhyath'>1. Weather App</a>
            <br/>
            <a href='https://github.com/RamPrakhyath05/Next.js-13-PESU_IO-2023/tree/main/Submissions/Assignment%202/PES2202300355-RamPrakhyath-Assignment2'>2. Text File Analysis Application</a>
            <br/>
            3. Chat Application - Coming Soon..
            <br/>
            <br/>
            Click on the them to visit the GitHub upload.
            </p>
        </div>
        </div>
        <div className="my-8 flex space-x-4">
        <Links
            href="/"
            text="Return to Main Page"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
        />
        <Links
            href="/about"
            text="About Page"
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
