import Image from "next/image";
import music from "../../../assets/images/musical-note.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Crown, EllipsisVertical } from "lucide-react";
import TransletionModal from "./TransletionModal";

const LessonCard = () => {
  const item = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      {item.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-primary/20 rounded-xl mb-4 p-4"
        >
          <div className="flex gap-3 items-center">
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={music}
                  alt="music"
                  height={70}
                  width={70}
                  className="w-6 bg-primary/10 rounded-full p-[5px]"
                />
                <p className="text-sm">Title of Music</p>
              </div>
              <audio controls className="h-10 w-64">
                <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <Crown className="text-[#ffb743]" />

          <TransletionModal />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Free</DropdownMenuItem>
              <DropdownMenuItem>Premium</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
