import React from "react";
import Stories from "./Stories";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="sm:max-w-[550px] sm:mx-auto w-full ml-0 mr-0 pr-0 pl  lg:mr-20 lg:ml-24  pt-10 ">
      <Stories />
      <Post />
    </div>
  );
};

export default Feed;
