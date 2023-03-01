import React from "react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Image from "next/image";
const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(
      [...Array(20)].map((_, i) => ({
        id: i,
        name: `${faker.name.firstName()}`,
        img: `${faker.image.avatar()}`,
      }))
    );
  }, []);
  console.log(stories);

  return (
    <div className="flex overflow-x-scroll bg-white sm:scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-500  ">
      {stories.map((p) => (
        <div
          key={p.id}
          className="flex flex-col items-center justify-center py-7  "
        >
          <div className=" hover:scale-110 transition-transform duration-300 ease-out  p-[1.5px] border-2 border-red-500 rounded-full w-16 flex items-center justify-center mx-2">
            <img
              className=" rounded-full h-14 w-14 object-cover"
              src={p.img}
              alt={p.name}
            />
          </div>

          <h3 className="text-start text-[13px]">{p.name}</h3>
        </div>
      ))}
    </div>
    // <h1>hello </h1>
  );
};

export default Stories;
