import React from "react";
import Stories from "./Stories";
import Post from "./Post";
const Feed = () => {
  return (
    <div className=" flex flex-col  relative sm:max-w-[550px] w-[100%]  sm:mx-auto  ml-0 mr-0 pr-0 pl  lg:mr-20 md:ml-96  pt-10 ">
      <Stories />
      <Post />
    </div>
  );
};

export default Feed;
