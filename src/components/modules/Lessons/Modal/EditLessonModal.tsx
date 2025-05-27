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
  isLocked,
}: {
  id: string;
  title: string;
  isLocked: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();
  const [check, setCheck] = useState<boolean>(isLocked);

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Upating...");

    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({ title: data.title, isLocked: check })
    );
    if (data.image) {
      formData.append("image", data.image);
    }

    const updatedData = {
      data: formData,
      id
    }

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
        <DialogTrigger>
          <EllipsisVertical />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5 text-2xl">
              Add Lesson
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper
            onSubmit={handleSubmit}
            defaultValues={{
              id,
              title,
              isLocked,
            }}
          >
            <MyFormInput name="title" label="Audio Title" placeholder="title" />
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

            <MyBtn name="Submit" width="w-full" />
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditLessonModal;
