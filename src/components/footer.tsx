import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 sm:px-0 sm:text-base text-xs text-white w-full sm:py-8 py-3 text-center">
      <p>
        &copy; 2024 Dynamic App. All rights reserved. Develpoped By:{" "}
        <Link href="https://lyzerslab.com">Lyzerslab</Link>
      </p>
    </footer>
  );
};

export default Footer;
