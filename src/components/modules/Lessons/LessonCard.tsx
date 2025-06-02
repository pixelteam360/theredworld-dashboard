/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import music from "../../../assets/images/musical-note.png";
import { Crown } from "lucide-react";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";
import EditLessonModal from "./Modal/EditLessonModal";
import DeleteModal from "@/components/common/DeleteModal";
import { useFolderLessonsQuery } from "@/redux/features/folders/folder.api";
import { useParams, useSearchParams } from "next/navigation";
import AddLessonModal from "./Modal/AddLessonModal";

const LessonCard = () => {
  const { id } = useParams();
  const name = useSearchParams().get("name");
  const { data, isFetching } = useFolderLessonsQuery({
    id,
    data: [{ name: "limit", value: 50 }],
  });

  if (isFetching) {
    return <Spinner />;
  }
  const item = data?.data?.data;

  return (
    <div>
      <div className="flex justify-between gap-3">
        <h2 className="text-2xl font-medium mb-12">{name}</h2>
        <div className="inline-block">
          <AddLessonModal />
        </div>
      </div>
      {
        item.length < 1   &&  <h3 className="text-xl font-semibold text-primary text-center">
        No data found
      </h3>
      }
      {item.map((item: any) => (
        <div
          key={item.id}
          className={`${
            item?.isLocked ? "bg-primary/20" : "bg-gray-200"
          } relative flex justify-between items-center rounded-xl mb-4 p-4`}
        >
          <div className="absolute -top-2 -right-2 text-red-500 text-lg">
            <DeleteModal id={item.id} type="lesson" btn="icon" />
          </div>

          <div className="flex gap-3 items-center">
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={item.image || music}
                  alt="music"
                  height={70}
                  width={70}
                  className="w-6 h-6 bg-primary/10 rounded-full p-[2px]"
                />
                <p className="text-sm">{item.lessonNumber}. {item.title}</p>
              </div>
            </div>
          </div>

          {item?.isLocked ? <Crown className="text-[#ffb743]" /> : <p>Free</p>}

          <Link href={`/lesson-details/${item.id}`}>
            <button className="bg-primary/70 text-white rounded-xl px-4 py-2">
              View Details
            </button>
          </Link>
          <EditLessonModal
            id={item.id}
            isLocked={item.isLocked}
            lessonNumber={item.lessonNumber}
            title={item.title}
            name="Edit Lesson"
            btn="icon"
          />
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
