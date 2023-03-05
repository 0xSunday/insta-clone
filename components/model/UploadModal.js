import { modalState } from "@/atoms/modalAtom";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { AiOutlineCamera } from "react-icons/ai";

import { db, storage } from "@/firebase";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
const UploadModal = () => {
  const captionRef = useRef();
  const filePickerRef = useRef();
  const [open, setOpen] = useRecoilState(modalState);

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session } = useSession();
  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      userName: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("New doc added with ID", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    // e.preventDefault();
    // const selectedPhoto = filePickerRef.current.value;
    // setSelectedFile(selectedPhoto);
    // console.log(selectedFile);

    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {open && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto z-10 flex flex-col gap-4 justify-center items-center">
              {selectedFile ? (
                <img
                  src={selectedFile}
                  className="w-full object-contain cursor-pointer"
                  onClick={() => setSelectedFile(null)}
                  alt="userPhoto"
                />
              ) : (
                <div
                  onClick={() => filePickerRef.current.click()}
                  className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 active:text-white transition-transform duration-500  p-3 rounded-full border-red-500 border  "
                >
                  <AiOutlineCamera size={40} className="" />
                </div>
              )}
              <h2 className="text-lg font-medium mb-4">upload a photo</h2>
              <div>
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>
              <div>
                <input
                  className="outline-none p-1 border text-center "
                  type="text"
                  ref={captionRef}
                  placeholder="enter a caption"
                />
              </div>
              <div className="flex justify-end w-full gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="text-red-400 hover:text-red-600 active:text-red-900 w-full font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  disabled={!selectedFile}
                  onClick={uploadPost}
                  className="bg-red-500 hover:bg-red-600 active:bg-red-900 w-full text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;
