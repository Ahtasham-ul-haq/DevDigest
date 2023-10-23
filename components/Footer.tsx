import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col">
      <p>
        This is a clone website, created by Ahtasham-ul-Haq, just for practising
        development skills.
      </p>
      <div className="flex gap-x-6">
        <Link
          target="_blank"
          href={"https://github.com/Ahtasham-ul-haq"}
          className="text-3xl text-white hover:text-white/80"
        >
          <AiFillGithub />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/ahtasham-ul-haq-9b0a41246/"}
          className="text-3xl text-white hover:text-white/80"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          target="_blank"
          href={"https://twitter.com/ahtasham1802"}
          className="text-3xl text-white hover:text-white/80"
        >
          <RiTwitterXFill />
        </Link>
        <Link
          target="_blank"
          href={"https://www.fiverr.com/ahtasham1802?up_rollout=true"}
          className="text-3xl text-white hover:text-white/80"
        >
          <TbBrandFiverr />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
