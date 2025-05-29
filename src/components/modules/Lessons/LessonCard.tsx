/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import music from "../../../assets/images/musical-note.png";
import { Crown } from "lucide-react";
import { useLessonsQuery } from "@/redux/features/lessons/lessons.api";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";
import EditLessonModal from "./Modal/EditLessonModal";
import DeleteModal from "@/components/common/DeleteModal";

const LessonCard = () => {
  const { data, isFetching } = useLessonsQuery([{ name: "limit", value: 50 }]);

  if (isFetching) {
    return <Spinner />;
  }

  const item = data?.data?.data;
  return (
    <div>
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
                <p className="text-sm">{item.title}</p>
              </div>
              <audio controls className="h-10 w-64">
                <source src={item.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {item?.isLocked ? <Crown className="text-[#ffb743]" /> : <p>Free</p>}

          <Link href={`lessons/${item.id}`}>
            <button className="bg-primary/70 text-white rounded-xl px-4 py-2">
              View Translation
            </button>
          </Link>
          <EditLessonModal
            id={item.id}
            isLocked={item.isLocked}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
