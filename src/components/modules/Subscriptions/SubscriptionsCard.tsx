import { Crown, SquarePen } from "lucide-react";

const SubscriptionsCard = () => {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-3 gap-7">
      {item.map((item, idx) => (
        <div
          key={idx}
          className="relative border border-primary/40 p-6 rounded-2xl flex flex-col items-center justify-center gap-4"
        >
          <Crown className="w-16 h-16 text-[#ffb743]" />

          <p><span className="text-primary text-2xl font-semibold">$30 /</span> Monthly</p>

          <p>One month Free access of all lessons</p>

         <div className="absolute top-2 right-2 text-primary"><SquarePen /></div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionsCard;
