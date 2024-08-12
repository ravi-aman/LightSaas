import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your Workflow and Boost your productivity
        </p>
        <div className="flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <div className="px-10 m-5">
        <div className="w-full m-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </div>
            <div className="flex items-center">
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#">About</a>
                <a href="#">Feature</a>
                <a href="#">Customer</a>
                <a href="#">Updates</a>
                <a href="#">Help</a>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight inline-flex items-center justify-center w-[120px]">
                  Get for Free
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
