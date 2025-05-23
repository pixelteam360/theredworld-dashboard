import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`bg-primary rounded-2xl py-3 md:px-36 px-20 text-xl text-white ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
