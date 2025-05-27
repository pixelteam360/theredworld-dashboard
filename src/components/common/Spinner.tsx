import React from "react";
import { ImSpinner4 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="md:py-10 py-5 flex justify-center items-center">
      <div className="animate-spin">
        <ImSpinner4 className="text-primary text-4xl" />
      </div>
    </div>
  );
};

export default Spinner;
