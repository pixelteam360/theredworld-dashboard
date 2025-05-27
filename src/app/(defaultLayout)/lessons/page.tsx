import AddLessonModal from "@/components/modules/Lessons/AddLessonModal";
import LessonCard from "@/components/modules/Lessons/LessonCard";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-white rounded-2xl">
      <div className="flex justify-between gap-3">
        <h2 className="text-2xl font-medium mb-12">Subscription plan</h2>
        <div className="inline-block">
          <AddLessonModal />
        </div>
      </div>
      <LessonCard />
    </div>
  );
};

export default page;
