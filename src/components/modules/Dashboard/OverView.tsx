"use client";
import { PiStudentFill } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";

const OverView = () => {
  // const { data } = useOverViewQuery(undefined);

  const overView = {
    totalUser: 120,
    totalProfile: 80,
    totalReviewReport: 20,
    totalProfileReport: 30,
  };

  return (
    <div className="bg-white rounded-2xl p-7 space-y-6">
      <p className="text-xl text-center">Summery</p>
      <div className="grid md:grid-cols-3 grid-cols-2  gap-7 ">
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">{overView?.totalUser}</h1>
          <div className="flex gap-3 items-center">
            <FaRegPlayCircle className="text-xl" />
            <p>Total Classes</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">{overView?.totalProfile}</h1>
          <div className="flex gap-3 items-center">
            <PiStudentFill className="text-2xl" />
            <p>Total Student</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">
            {overView?.totalReviewReport}
          </h1>
          <div className="flex gap-3 items-center">
            <MdSubscriptions />
            <p>Total Subscriptions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
