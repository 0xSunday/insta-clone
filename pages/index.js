import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/nav/Nav";
import Feed from "@/components/middle/Feed";
import Suggestion from "@/components/right/Suggestion";
import NavBottem from "@/components/nav/NavBottem";
import Header from "@/components/nav/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Insta</title>
        <meta name="description" content="instagram clone by sunil reddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-1 sm:px-4 ">
        <Header />
        <Nav />

        <Feed />
        <Suggestion />
        <NavBottem />
      </div>
    </>
  );
}
