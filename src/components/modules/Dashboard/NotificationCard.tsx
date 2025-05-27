/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import userImage from "../../../assets/placeholders/user-placeholder.jpg";
import { usePurchesSubscriptionQuery } from "@/redux/features/dashboard/dashboard.api";
import { format, parseISO } from "date-fns";

const NotificationCard = () => {
  const { data } = usePurchesSubscriptionQuery(undefined);
  const item = data?.data;

  if (item?.length < 1) {
    return (
      <p className="text-xl font-medium text-primary text-center my-8">
        No data found
      </p>
    );
  }
  return (
    <div>
      {item?.map((item: any, idx: number) => (
        <div key={idx} className="flex gap-2 py-5 border-b">
          <Image
            src={item?.User?.image || userImage}
            alt="iamge"
            height={80}
            width={80}
            className="w-12 h-1/2 rounded-lg"
          />

          <div className="">
            <p>
              {item?.User?.fullName || item?.User?.email } {" "}
              <span className="text-[12px] text-grayText">
                {format(parseISO(item.createdAt), "dd MMMM yyyy")}
              </span>
            </p>
            <p className="text-grayText">has just purchased the course. <span className="text-[12px]">(${item?.amount})</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
