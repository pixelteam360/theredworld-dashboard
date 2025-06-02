/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateLessonMutation } from "@/redux/features/lessons/lessons.api";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditLessonModal = ({
  id,
  title,
  lessonNumber,
  isLocked,
  audioType,
  name,
  btn
}: {
  id: string;
  title?: string;
  lessonNumber?: string;
  isLocked?: boolean;
  audioType?: "miniStory" | "vocabulary";
  name: string;
  btn: "text" | "icon"
}) => {
  const [open, setOpen] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();
  const [check, setCheck] = useState<boolean | undefined>(isLocked);
  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Upating...");

    const lessonNumber = Number(parseFloat(data.lessonNumber));

    if (!lessonNumber) {
      return toast.error("Invalid Lesson number", { id: toastId });
    }

    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({ title: data.title, isLocked: check, lessonNumber })
    );
    if (data.image) {
      formData.append("image", data.image);
    }

    if (audioType) {
      formData.append(audioType, data.audio);
    }

    const updatedData = {
      data: formData,
      id,
    };

    try {
      const res = await updateLesson(updatedData).unwrap();

      if (res) {
        setOpen(false);
        return toast.success("Updated Successfully", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to update", { id: toastId });
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        {
          btn === "icon" ? <DialogTrigger>
          <EllipsisVertical />
        </DialogTrigger>
        : <DialogTrigger className="bg-primary text-white px-2 py-1 rounded-lg mt-7">
          {name}
        </DialogTrigger>
        }
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5 text-2xl">
              {name}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper
            onSubmit={handleSubmit}
            defaultValues={{
              id,
              title,
              lessonNumber,
              isLocked,
            }}
          >
            {!audioType && (
              <div>
                <MyFormInput
                  name="title"
                  label="Audio Title"
                  placeholder="title"
                />
                <MyFormInput
                  name="lessonNumber"
                  label="Lesson Number"
                  placeholder="number"
                />
                <MyFormInput
                  type="file"
                  acceptType="image/*"
                  name="image"
                  label="Audio Image (potional)"
                  filePlaceholder="Upload image"
                  required={false}
                />

                <label className="flex items-center gap-2 mb-3">
                  <input
                    type="checkbox"
                    checked={!check}
                    onChange={() => setCheck(!check)}
                  />
                  Make it free
                </label>
              </div>
            )}

            {audioType && (
              <MyFormInput
                type="file"
                name="audio"
                label="Audio File"
                filePlaceholder="Upload Audio File"
                required={false}
              />
            )}

            <MyBtn name="Submit" width="w-full" />
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditLessonModal;
