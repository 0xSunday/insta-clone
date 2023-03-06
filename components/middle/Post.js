import React from "react";
import { useRef } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection(db, "posts", posts.id , "comments"),
  //         orderBy("timestamp", "desc")
  //       ),
  //       (snapshot) => setComments(snapshot.docs)
  //     ),
  //   [db]
  // );

  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "posts", posts.id, "likes"), (snapshot) =>
  //       setLikes(snapshot.docs)
  //     ),
  //   [db, posts.id]
  // );

  // useEffect(
  //   () =>
  //     setHasLiked(
  //       likes.findIndex((like) => like.id === session?.user?.uid) !== -1
  //     ),
  //   [likes]
  // );

  // const likePost = async () => {
  //   if (hasLiked) {
  //     await deleteDoc(doc(db, "posts", posts.id, "likes", session.user.uid));
  //   } else {
  //     await setDoc(doc(db, "posts", posts.id, "likes", session.user.uid), {
  //       username: session.user.username,
  //     });
  //   }
  // };

  // const sendComment = async (e) => {
  //   e.preventDefault();
  //   const commentToSend = comment;
  //   setComment("");
  //   await addDoc(collection(db, "posts", posts.id, "comments"), {
  //     comment: commentToSend,
  //     username: session.user.username,
  //     userImage: session.user.image,
  //     timestamp: serverTimestamp(),
  //   });
  // };

  // // post
  
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => setPosts(snapshot.docs)
      ),
    [db]
  );
  console.log(posts);

  return (
    <section className="  bg-white pb-11 ">
      {posts.map((p, i) => (
        <div
          // sunil
          key={i}
          className={` ${
            i === posts.length - posts.length ? "mt-0 mb-5" : "my-5"
          }   rounded-sm flex flex-col gap-2  border-b  pb-5`}
        >
          <div className="flex items-center justify-between px-3 pt-2">
            <div className="flex items-center justify-center gap-3 ">
              <img
                src={p.data().profileImg}
                alt={p.data().caption}
                className="h-10 p-[1px] w-full rounded-full border-2 border-red-600 "
              />
              <h3 className="font-semibold">{p.data().userName} </h3>

              <Moment fromNow className="pr-5 text-gray-700">
                {p.data().timestamp?.toDate()}
              </Moment>
              {/* <p className="text-gray-700">30 </p> */}
            </div>
            <FiMoreHorizontal />
          </div>

          <div>
            <img
              src={p.data().image}
              className="w-full h-full"
              alt={p.caption}
            />
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
          <div className="px-3 font-semibold">{likes.length} likes</div>
          <div className="px-3 leading-5 pr-9">
            <span className="font-bold  ">{p.data().userName}</span>{" "}
            {p.data().caption}
          </div>

          {/* {comments.length > 0 && (
            <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-center space-x-2 mb-3"
                >
                  <img
                    className="h-7 rounded-full"
                    src={comment.data().userImage}
                    alt=""
                  />
                  <p className="text-sm flex-1">
                    <span className="font-bold">{comment.data().username}</span>{" "}
                    {comment.data().comment}
                  </p>
                  <Moment fromNow className="pr-5 text-xs">
                    {comment.data().timestamp?.toDate()}
                  </Moment>
                </div>
              ))}
            </div>
          )} */}

          <form className="px-3 flex items-center justify-between">
            <div className="flex justify-center items-center gap-2">
              <BsEmojiSmile />
              <input
                type="text"
                placeholder="Add a comment..."
                // value={comment}
                // onChange={(e) => setComment(e.target.value)}
                className="border-none flex-1 focous:ring-0 outline-none"
              />
            </div>

            <button
              disabled={!comment.trim()}
              // onClick={sendComment}
              type="submit"
              className="border-none text-blue-600 lg:hover:scale-125 transition-transform duration-300 ease-out"
            >
              post
            </button>
          </form>
        </div>
      ))}
    </section>
  );
};

export default Post;
