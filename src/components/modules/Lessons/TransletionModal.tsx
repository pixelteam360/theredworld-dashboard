/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useUpdateTranslationMutation } from "@/redux/features/lessons/lessons.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const TransletionModal = ({
  title,
  id,
  type,
}: {
  title: string;
  id: string;
  type: string;
}) => {
  const [open, setOpen] = useState(false);
  const [updateTranslation] = useUpdateTranslationMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    try {
      const res = await updateTranslation({
        id,
        data: { ...data, type },
      }).unwrap();

      if (res) {
        setOpen(false);
        return toast.success("Updated Successfully", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Update", { id: toastId });
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <FaEdit className="text-primary" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5">Modify</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper
            onSubmit={handleSubmit}
            defaultValues={{ english: title }}
          >
            <MyFormInput type="textarea" name="english" />

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="bg-gray-500 rounded-2xl py-3 md:px-8 px-5 text-white"
              >
                Cancel
              </button>

              <MyBtn name="Submit" />
            </div>
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TransletionModal;
