import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Not Found</h2>
            <p className="text-lg text-gray-600 mb-6">Could not find requested resource</p>
            <Link href="/">
                <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Return Home
                </button>
            </Link>
        </div>
    );
}
