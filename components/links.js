export default function Links({ href, text }) {
    return (
    <a
        className="inline-block px-4 py-2 mx-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 hover:text-gray-100 transition-all duration-300 shadow-md border border-blue-600"
        href={href}
    >
        {text}
    </a>
    );
}
