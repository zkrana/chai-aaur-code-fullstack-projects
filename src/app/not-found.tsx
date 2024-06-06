import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex sm:min-h-[calc(100vh-152px)] min-h-[calc(100vh-120px)]  justify-center items-center ">
      <div className="text-center text-slate-600">
        <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
        <p className="text-lg mb-6">
          Oops! The page you're looking for could not be found.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
