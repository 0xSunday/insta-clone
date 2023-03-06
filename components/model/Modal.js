import { signOut } from "next-auth/react";
import React from "react";

export default function Modal({ showModal, setShowModal }) {
  // const [showModal, setShowModal] = React.useState(false);

  const logoutHanlder = (e) => {
    setShowModal(false);
    signOut();
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto z-10">
              <h2 className="text-lg font-medium mb-4">
                Are you sure you want to log out?
              </h2>
              <div className="flex justify-end">
                <button
                  className=" text-blue-500 active:text-blue-900 font-bold py-2 px-4 rounded mr-4"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 active:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  onClick={logoutHanlder}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
