//import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";

export default function NeduLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <div className="flex h-20 shrink-0 items-end rounded-lg md:h-52">
        {/*<Logo />*/}
        <Image
        src="/nedulogoblanco.jpg"
        width={130}
        height={80}
        className="hidden md:block"
        alt="Nedu Logo desktop version"
      />
       <Image
        src="/nedulogoblanco.jpg"
        width={50}
        height={30}
        className="block md:hidden"
        alt="Nedu Logo mobile version"
      />
      </div>
    </div>
  );
}