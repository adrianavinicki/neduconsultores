import Link from 'next/link';
import NavLinks from '@/app/components/nav-links';
import NeduLogo from '@/app/components/Nedulogo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
     <div className="flex h-20 w-full items-center justify-start rounded-md bg-cyan-600 p-4 md:h-40">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-transparent p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          <NeduLogo />
        </div>
      </Link>
      <div className="right-4 flex grow flex-row justify-between space-x-2 md:space-x-0 md-block">
        <NavLinks />
        <div className="hidden grow rounded-md bg-transparent md:block"></div>
        <form>
          <button className="flex h-[68px] w-[150px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
      </div>
  );
}