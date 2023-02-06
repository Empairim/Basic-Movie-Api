import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-emerald-500">
      <Link href={"/"}>
        <button className=" w-full flex justify-center rounded-xl p-2 content-center bg-emerald-400 text-black">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
