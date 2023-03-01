import { logoDown } from "@/data";
import React from "react";

const NavBottem = () => {
  return (
    <div className="px-3 p-2 z-20 border-t-2 fixed bottom-0 left-0 right-0 flex md:hidden w-full   text-black justify-around bg-white">
      {logoDown.map((d) => (
        <div className="flex  gap-3 px-4 py-1 rounded-3xl  hover:bg-slate-50">
          <d.logo
            size={25}
            color="black"
            className="hover:scale-105 transition-transform"
          />
        </div>
      ))}
    </div>
  );
};

export default NavBottem;
