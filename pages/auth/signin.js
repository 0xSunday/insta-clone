import { async } from "@firebase/util";
import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fa";

const signin = ({ providers }) => {
  

  
  return (
    <div className="flex flex-col justify-center   h-[100vh]  items-center bottom-2 p-14 px-7 shadow-xl border-black">
      <div className="border shadow-xl flex flex-col gap-6 border-black justify-center items-center  p-5">
        <div className="">
          <Image
            className="w-60"
            src="/logo.png"
            alt="instagram"
            width={500}
            height={500}
          />
        </div>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-2 mt-3 bg-blue-600 text-white hover:text-black font-bold rounded-xl"
              onClick={() =>
                SignIntoProvider(provider.id, { callbackUrl: "/" })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
