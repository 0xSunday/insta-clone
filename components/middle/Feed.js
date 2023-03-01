import React from "react";
import Stories from "./Stories";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="sm:max-w-[550px] mx-auto w-full  lg:mr-20 lg:ml-24  pt-10 ">
      <Stories />
      <Post />
    </div>
  );
};

export default Feed;
