import Image from "next/image";
import Link from "next/link";
import NavBar from "./ui/NavBar";
import { signika, poppins } from "./ui/fonts";

export default function Home() {
  return (
    <div className="p-[24px]">
      {/* <NavBar /> */}

      {/* Header */}
      <header>
        <div>
          <h1 className={`${poppins.className} text-[38px]`}>Max Nichols</h1>
          <h2 className={`${signika.className} text-[24px] mt-[.55rem]`}>
            Front End Engineer
          </h2>
          <p className="text-[16px] mt-[.55rem]">
            I am a front-end engineer with a passion for building beautiful and
            functional user interfaces. I have experience with React, Next.js,
            and Tailwind CSS.
          </p>
        </div>
      </header>
      <div></div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
