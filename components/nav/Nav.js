import Image from "next/image";
import React from "react";
import { leftSideData } from "@/data";
import Link from "next/link";
import { AiOutlineMore } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "../model/model";
import { modalState } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";
const Nav = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = React.useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  // console.log(session);
  return (
    <div className=" fixed bg-white hidden md:flex w-64 max-w-[600px] l mx-3 pt-10 pb-4 text-black  border-r-2 h-[100vh]  justify-between flex-col">
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
          {leftSideData.map((d, index) =>
            index === 6 ? (
              <div
                onClick={() => setOpen(true)}
                className="flex gap-3 px-2 py-4 rounded-3xl  hover:bg-slate-50"
              >
                <d.logo
                  size={25}
                  color="black"
                  className="hover:scale-105 transition-transform duration-300 ease-out"
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
            ) : (
              <div className="flex gap-3 px-2 py-4 rounded-3xl  hover:bg-slate-50">
                <d.logo
                  size={25}
                  color="black"
                  className="hover:scale-105 transition-transform duration-300 ease-out"
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
            )
          )}

          {session && (
            <div className="flex gap-3 px-2 py-4 rounded-3xl  hover:bg-slate-50">
              <img
                // onClick={signOut}
                onClick={() => setShowModal(true)}
                src={session?.user?.image}
                className="hover:scale-105 rounded-full h-6 transition-transform duration-300 ease-out"
              />

              <h3 className={`text-[17px] font-normal`}>Profile</h3>
            </div>
          )}
        </div>
      </div>
      {session ? (
        <div className="flex gap-3 px-2 py-4 rounded-3xl   hover:bg-slate-50">
          <AiOutlineMore size={30} />

          <h3 className="text-[17px]">More</h3>
        </div>
      ) : (
        <div className="flex gap-0 justify-start items-center">
          <button
            onClick={signIn}
            className=" px-3 py-1 m-1 rounded-lg text-white border-none outline-none bg-blue-600"
          >
            login
          </button>
          <button
            onClick={signIn}
            className=" font-semibold px-3 py-1 m-1 text-blue-500 border-none outline-none hover:text-black"
          >
            Signin
          </button>
        </div>
      )}

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Nav;
