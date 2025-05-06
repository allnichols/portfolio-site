import Link from "next/link";

const Links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full gb-white md:static md:border-none md:bg-transparent sm:border-t-1 sm:border-t-gray-300 sm:border-t-solid">
      <div className="md:flex md:justify-between p-4 md:p-0">
        <div className="text-lg font-bold hidden md:block md:mr-8">
          <Link href="/">MN</Link>
        </div>
        <ul className="flex justify-between  md:justify-end md:gap-8">
          {Links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
