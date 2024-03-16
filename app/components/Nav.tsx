// icons
import { EnvelopeIcon } from "@heroicons/react/24/solid";

//next link
import Link from "next/link";

//next router
import { usePathname, useRouter } from "next/navigation";
//import { string } from "zod";

// nav data
interface NavItem {
    name: string;
    path: string;
    icon?: JSX.Element; // especifica que el item puede no tener un icon
}
const navData: NavItem[] = [
  { name: "home", path: "/"/*, icon: <HiHome />*/ },
  { name: "about", path: "/about"/*, icon: <HiUser />*/ },
  { name: "services", path: "/services"/*, icon: <HiRectangleGroup /> */},
  { name: "work", path: "/work"/*, icon: <HiViewColumns /> */},
  {
    name: "testimonials",
    path: "/testimonials",
    /*icon: <HiChatBubbleBottomCenterText />,*/
  },
  {
    name: "contact",
    path: "/contact",
    icon: <EnvelopeIcon />,
  },
];



const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className="bg-white flex flex-row items-center justify-center gap-y-4 fixed h-max 
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/*inner*/}
      <div
        className="flex w-full items-center justify-between 
       gap-y-10 px-4  md:px-40 xl:px-0 h-[80px] xl:h-max py-0
        bg-white/10 backdrop-blur-sm text-xl xl:rounded-full"
      >
        {navData.map((link, index) => (
            <Link href={link.path} key={index}>
              <div className={`${link.path === pathname && "text-accent"} relative 
              flex items-center group hover:text-accent transition-all duration-300`}
            >
              {/*tooltip*/}ss
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div
                  className="bg-white relative flex text-primary items-center
                p-[6px] rounded-[3px]"
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8
                  border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  ></div>
                </div>
              </div>
              {/* icon*/}
              <div>{link.icon}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </nav>
  );
};

export default Nav;