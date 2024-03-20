import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Acerca de',
    href: '/dashboard/about',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Servicios', href: '/dashboard/services', icon: UserGroupIcon },
  { name: 'Capacitación', href: '/dashboard/learning', icon: UserGroupIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Contacto', href: '/dashboard/mail', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[68px] w-[150px] grow items-center justify-center rounded-md bg-transparent p-3 text-sm font-medium hover:bg-sky-100 hover:text-cyan-600 text-black-700 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
