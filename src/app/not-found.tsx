import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h2 className="text-4xl">Not Found</h2>
        <p className="pt-1">Could not find requested resource</p>
        <Link
          href="/"
          className=" inline-block py-1 px-3 bg-sky-500 text-slate-50 rounded-sm mt-8"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
