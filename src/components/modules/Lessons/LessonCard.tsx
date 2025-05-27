/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import music from "../../../assets/images/musical-note.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Crown, EllipsisVertical } from "lucide-react";
import { useLessonsQuery } from "@/redux/features/lessons/lessons.api";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";

const LessonCard = () => {
  const { data, isFetching } = useLessonsQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const item = data?.data?.data;
  console.log(data?.data?.data);
  return (
    <div>
      {item.map((item: any) => (
        <div
          key={item.id}
          className={`${
            item?.isLocked ? "bg-primary/20" : "bg-gray-200"
          } flex justify-between items-center rounded-xl mb-4 p-4`}
        >
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
          <button className="bg-primary/70 text-white rounded-xl px-4 py-2">View Translation</button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Free</DropdownMenuItem>
              <DropdownMenuItem>Premium</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
