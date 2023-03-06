import { modalState } from "@/atoms/modalAtom";
import { logoDown } from "@/data";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import Modal from "../model/Modal";
import { useRecoilState } from "recoil";
const NavBottem = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = React.useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
      {session && (
        <div className="px-3 p-2 z-20 border-t-2 fixed bottom-0 left-0 right-0 flex md:hidden w-full   text-black justify-around bg-white">
          {logoDown.map((d, i) =>
            i === 2 ? (
              <div
                onClick={() => setOpen(true)}
                key={i}
                className="flex  gap-3 px-4 py-1 rounded-3xl  hover:bg-slate-50"
              >
                <d.logo
                  size={25}
                  color="black"
                  className="hover:scale-105 transition-transform"
                />
              </div>
            ) : (
              <div
                key={i}
                className="flex  gap-3 px-4 py-1 rounded-3xl  hover:bg-slate-50"
              >
                <d.logo
                  size={25}
                  color="black"
                  className="hover:scale-105 transition-transform"
                />
              </div>
            )
          )}
          <div
            onClick={() => setShowModal(true)}
            className="flex  gap-3 px-4 py-1 rounded-3xl  hover:bg-slate-50"
          >
            <img
              src={session?.user?.image}
              className="hover:scale-105 transition-transform  rounded-full h-6 "
            />
          </div>
        </div>
      )}

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default NavBottem;
