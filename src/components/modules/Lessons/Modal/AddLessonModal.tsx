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
import { useCreatelessonMutation } from "@/redux/features/lessons/lessons.api";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddLessonModal = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [createLesson] = useCreatelessonMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({ title: data.title, folderId: id })
    );
    if (data.image) {
      formData.append("image", data.image);
    }

    try {
      const res = await createLesson(formData).unwrap();

      if (res) {
        setOpen(false);
        return toast.success("Uploded Successfully", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Upload", { id: toastId });
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-primary rounded-2xl py-3 md:px-8 px-5 text-white">
          Add Lesson
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5 text-2xl">
              Add Lesson
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper onSubmit={handleSubmit}>
            <MyFormInput name="title" label="Audio Title" placeholder="title" />
            <MyFormInput
              type="file"
              acceptType="image/*"
              name="image"
              label="Audio Image (optional)"
              filePlaceholder="Upload image"
              required={false}
            />
            <MyBtn name="Submit" width="w-full" />
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddLessonModal;
