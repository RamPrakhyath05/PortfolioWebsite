export default function SocialLink({ href, text, icon }) {
    return (
    <a
        className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-black rounded-md hover:bg-blue-600 hover:text-gray-100 transition-all duration-300 shadow-md mb-4 mr-4" // Added `mr-4` for right margin
        href={href}
    >
        {text}
    </a>
    );
}
