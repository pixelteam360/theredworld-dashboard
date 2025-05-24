
import AddSubscriptionModal from "@/components/modules/Subscriptions/SubscriptiomModal/SubscriptionModal";
import SubscriptionsCard from "@/components/modules/Subscriptions/SubscriptionsCard";

const page = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <h2 className="text-2xl font-medium mb-12">Subscription plan</h2>
        <div className="inline-block">
            <AddSubscriptionModal type="Add" />
        </div>
      </div>
      <SubscriptionsCard />
    </div>
  );
};

export default page;
