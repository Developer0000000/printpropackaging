import Link from "next/link";

const ThankYouPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h2>
                <p className="text-gray-700 mb-6">
                    Your submission has been received. We will get back to you soon.
                </p>
                <Link href="/" className="text-blue-500 hover:underline">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
};

export default ThankYouPage;
