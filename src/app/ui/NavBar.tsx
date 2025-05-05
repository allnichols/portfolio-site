import Link from "next/link";

const Links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full gb-white bordet-t md:static md:border-none md:bg-transparent">
      <ul className="flex justify-around md:justify-start md:gap-8 p-4 md:p-0">
        {Links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
