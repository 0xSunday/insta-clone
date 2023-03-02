import React from "react";
import { useRef } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
const Post = () => {
  const dummyData = [
    {
      id: 1,
      uploadedData: "30m",
      userName: "suni.eth",
      profileImg: "profile6.jpg",
      img: "profile2.jpg",
      caption: "this the fist post in this instagram clone made by sunil reddy",
      likes: "14",
    },
    {
      id: 1,
      uploadedData: "30m",
      userName: "suni.eth",
      profileImg: "profile6.jpg",
      img: "profile5.jpg",
      caption: "this the fist post in this instagram clone made by sunil reddy",
      likes: "14",
    },
    {
      id: 1,
      uploadedData: "30m",
      userName: "suni.eth",
      profileImg: "profile6.jpg",
      img: "profile5.jpg",
      caption: "this the fist post in this instagram clone made by sunil reddy",
      likes: "14",
    },
    {
      id: 1,
      uploadedData: "30m",
      userName: "suni.eth",
      profileImg: "profile6.jpg",
      img: "profile5.jpg",
      caption: "this the fist post in this instagram clone made by sunil reddy",
      likes: "14",
    },
  ];
  const commentRef = useRef();
  const commentHandler = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    console.log(comment);
  };
  return (
    <section className="  bg-white pb-11 ">
      {dummyData.map((p, i) => (
        <div
          className={` ${
            i === dummyData.length - dummyData.length ? "mt-0 mb-5" : "my-5"
          }   rounded-sm flex flex-col gap-2  border-b  pb-5`}
        >
          <div className="flex items-center justify-between px-3 pt-2">
            <div className="flex items-center justify-center gap-3 ">
              <img
                src={p.profileImg}
                alt={p.userName}
                className="h-10 p-[1px] w-full rounded-full border-2 border-red-600 "
              />
              <h3 className="font-semibold">{p.userName} </h3>
              <p className="text-gray-700">{p.uploadedData}</p>
            </div>
            <FiMoreHorizontal />
          </div>

          <div>
            <img src={p.img} className="w-full h-full" alt={p.caption} />
          </div>

          <div className="flex items-center justify-between px-3">
            <div className="flex items-center justify-center gap-4">
              <AiOutlineHeart
                size={27}
                className="hover:scale-125 hover:text-red-500 transition-transform duration-300 ease-out"
              />
              <FaRegComment
                size={24}
                className="hover:scale-125 hover:text-red-500 transition-transform duration-300 ease-out"
              />
              <FiSend
                size={24}
                className="hover:scale-125 hover:text-red-500 transition-transform duration-300 ease-out"
              />
            </div>
            <div>
              <BiBookmark
                size={27}
                className="hover:scale-125 hover:text-red-500 transition-transform duration-300 ease-out"
              />
            </div>
          </div>
          <div className="px-3 font-semibold">{p.likes} likes</div>
          <div className="px-3 leading-5 pr-9">
            <span className="font-bold  ">{p.userName}</span> {p.caption}
          </div>

          <form
            onSubmit={commentHandler}
            className="px-3 flex items-center justify-between"
          >
            <div className="flex justify-center items-center gap-2">
            <BsEmojiSmile/>
              <input
                type="text"
                placeholder="Add a comment..."
                className="border-none flex-1 focous:ring-0 outline-none"
                ref={commentRef}
              />
            </div>

            <button className="border-none text-blue-600 lg:hover:scale-125 transition-transform duration-300 ease-out">
              post
            </button>
          </form>
        </div>
      ))}
    </section>
  );
};

export default Post;
