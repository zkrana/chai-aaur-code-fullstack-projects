import Link from "next/link";

export default function Cta() {
  return (
    <>
      <section className="bg-blue-500 w-full py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-white mb-8">
            Have a question or feedback? We'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
