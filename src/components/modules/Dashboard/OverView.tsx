"use client";
import { PiStudentFill } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { useSummaryQuery } from "@/redux/features/dashboard/dashboard.api";

const OverView = () => {
  const { data } = useSummaryQuery(undefined);

  const overView = data?.data;

  return (
    <div className="bg-white rounded-2xl p-7 space-y-6">
      <p className="text-xl text-center">Summery</p>
      <div className="grid md:grid-cols-3 grid-cols-2  gap-7 ">
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">{overView?.totalLesson}</h1>
          <div className="flex gap-3 items-center">
            <FaRegPlayCircle className="text-xl" />
            <p>Total Lessons</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">{overView?.totalStudent}</h1>
          <div className="flex gap-3 items-center">
            <PiStudentFill className="text-2xl" />
            <p>Total Student</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border">
          <h1 className="text-[40px] font-bold">
            {overView?.totalSubscription}
          </h1>
          <div className="flex gap-3 items-center">
            <MdSubscriptions />
            <p>Total Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
