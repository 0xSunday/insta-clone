import { rigtData } from "@/data";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Suggestion = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div className="hidden pt-[4.3rem] xl:flex mr-10 w-[300px] flex-col ">
          <div className="flex justify-between  w-full h-16 items-center ">
            <div className="flex flex-row justify-center  gap-2">
              <img
                className="w-12 h-12 shadow-sm  rounded-full"
                src={session?.user?.image}
                alt="Picture of the author"
              />

              <div className="flex flex-col">
                <h4>{session.user.username}</h4>
                <h4 className="text-gray-400 font-normal">
                  {session.user.name}
                </h4>
              </div>
            </div>

            <div>
              <h3 onClick={signOut} className="text-blue-500 hover:text-black">
                Sign Out
              </h3>
            </div>
          </div>

          <div className=" flex justify-between py-5">
            <h1 className="text-gray-400 font-medium text-[15px]">
              Suggestions for you
            </h1>
            <h1 className="text-[15px]">See All</h1>
          </div>

          {rigtData.map((d) => (
            <div className="flex justify-between  w-full h-14 items-center ">
              <div className="flex flex-row justify-center  gap-2">
                <Image
                  className="w-10 h-10 shadow-sm  rounded-full object-cover"
                  src={`/${d.image}`}
                  alt={d.name}
                  width={500}
                  height={500}
                />

                <div className="flex flex-col">
                  <h4 className="text-[14px]">{d.name}</h4>
                  <h4 className="text-gray-400 font-normal text-[11px]">
                    {d.data}
                  </h4>
                </div>
              </div>

              <div>
                <h3 className="text-blue-500  hover:text-black">Follow</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Suggestion;
