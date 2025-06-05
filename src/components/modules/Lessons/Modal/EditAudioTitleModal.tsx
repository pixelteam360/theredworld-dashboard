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
import { useUpdateLessonAudioMutation } from "@/redux/features/lessons/lessons.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditAudioTitleModal = ({id, title}: {id: string, title: string}) => {
  const [open, setOpen] = useState(false);
  const [update] = useUpdateLessonAudioMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");
console.log(data);

    try {
      const res = await update({...data, id}).unwrap();

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
        <DialogTrigger className="bg-primary rounded-xl py-1 px-4 text-white">
          Edit Audio Name
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5 text-2xl">
              Edit Audio Name
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper onSubmit={handleSubmit} defaultValues={{title}}>
            <MyFormInput name="title" label="Audio Name" placeholder="name" />
            <MyBtn name="Submit" width="w-full" />
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditAudioTitleModal;
