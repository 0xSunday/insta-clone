import Image from "next/image";
import React from "react";
import { leftSideData } from "@/data";
import Link from "next/link";
import { AiOutlineMore } from "react-icons/ai";
const Nav = () => {
  return (
    <div className="hidden sm:flex w-64 max-w-[600px] l mx-3 pt-10 pb-4 text-black  border-r-2 h-[100vh]  justify-between flex-col">
      <div>
        <div>
          <Link href="/">
            <Image
              className="w-28"
              src="/logo.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Link>
        </div>

        <div className="py-4 ">
          {leftSideData.map((d, index) => (
            <div className="flex gap-3 px-2 py-4 rounded-3xl  hover:bg-slate-50">
              <d.logo
                size={25}
                color="black"
                className="hover:scale-105 transition-transform"
              />

              <h3
                className={`${
                  index === leftSideData.length - leftSideData.length
                    ? "font-bold"
                    : "font-normal"
                } text-[17px]`}
              >
                {d.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 px-2 py-4 rounded-3xl   hover:bg-slate-50">
        <AiOutlineMore size={30} />

        <h3 className="text-[17px]">More</h3>
      </div>
    </div>






  );
};

export default Nav;
