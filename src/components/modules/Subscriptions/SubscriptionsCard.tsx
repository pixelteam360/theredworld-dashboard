/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Crown } from "lucide-react";
import AddSubscriptionModal from "./SubscriptiomModal/SubscriptionModal";
import { useSubscriptionQuery } from "@/redux/features/subscription/subscription.api";
import Spinner from "@/components/common/Spinner";
import DeleteModal from "@/components/common/DeleteModal";

const SubscriptionsCard = () => {
  const { data, isFetching } = useSubscriptionQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }
  const item = data?.data;

  if (item.length < 1) {
    return (
      <h2 className="text-xl font-semibold text-primary text-center">
        No Data Found
      </h2>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-7">
      {item.map((item: any) => (
        <div
          key={item.id}
          className="relative border border-primary/40 p-6 rounded-2xl flex flex-col items-center justify-center gap-4"
        >
          <Crown className="w-16 h-16 text-[#ffb743]" />

          <p>
            <span className="text-primary text-2xl font-semibold">
              ${item?.price} /
            </span>{" "}
            {item?.title}
          </p>

          <p>Free access of all lessons</p>

          <div className="absolute top-2 right-2">
            <DeleteModal btn="icon" id={item.id} type="subscription" />
          </div>

          <div className="absolute top-2 left-2 ">
            <AddSubscriptionModal
              type="Edit"
              payload={{
                id: item.id,
                duration: item.duration,
                price: item.price,
                title: item.title,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionsCard;
