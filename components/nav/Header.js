import React from "react";
import Image from "next/image";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
const Header = () => {
  return (
    <div className=" px-5 border-b-2 items-center justify-between py-2 fixed top-0 left-0 right-0 flex sm:hidden w-full   text-black  bg-white">
      <div className="flex justify-center items-center">
        <Image
          className="w-28"
          src="/logo.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>

      <div className="flex gap-3 justify-center items-center">
        <AiOutlineHeart size={25} />
        <div className="flex">
          <RiMessengerLine size={25} />

          <div className="-ml-3 -mt-1 rounded-full bg-red-500 px-1 h-4 text-[10px] text-center flex justify-center items-center text-white">
            10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
