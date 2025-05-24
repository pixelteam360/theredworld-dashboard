import MyBtn from "@/components/common/MyBtn";
import SubscriptionsCard from "@/components/modules/Subscriptions/SubscriptionsCard";

const page = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <h2 className="text-2xl font-medium mb-12">Subscription plan</h2>
        <div className="inline-block">
            <MyBtn name="Add Subscription" />
        </div>
      </div>
      <SubscriptionsCard />
    </div>
  );
};

export default page;
