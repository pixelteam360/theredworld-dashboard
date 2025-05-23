"use client";
import Image from "next/image";
import userImg from "../../assets/placeholders/user-placeholder.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-white rounded-2xl mb-8">
      <h1 className="md:text-[32px] text-2xl font-bold uppercase">Dashboard</h1>
      <div className="flex gap-2 items-center">
        <Image
          src={userImg}
          alt="profile image"
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
        <p>Danielle Campbell </p>
      </div>
    </div>
  );
};

export default Navbar;