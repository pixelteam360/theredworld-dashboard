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
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

type data = {
  id: string;
  title: string;
  duration: number;
  price: number;
};

const AddSubscriptionModal = ({
  type,
  payload,
}: {
  type: "Add" | "Edit";
  payload?: data;
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("login...");

    // try {
    //   const res = await login(data).unwrap();

    //   if (res) {
    //     return toast.error("Unauthorize Access", { id: toastId });
    //   }
    // } catch (err: any) {
    //   toast.error(err.data?.message || "Faild to login", { id: toastId });
    // }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        {type === "Add" ? (
          <DialogTrigger className="bg-primary rounded-2xl py-3 md:px-8 px-5 text-white">
            Add Subscription
          </DialogTrigger>
        ) : (
          <DialogTrigger className="text-primary">
            <SquarePen />
          </DialogTrigger>
        )}

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div>
                <h2 className="text-xl font-semibold text-center mb-8">
                  {type} Subscription
                </h2>
                <MyFormWrapper onSubmit={handleSubmit} defaultValues={payload}>
                  <MyFormInput name="title" label="Title" />
                  <MyFormInput name="duration" label="Duration (day)" />
                  <MyFormInput name="price" label="Price" />

                  <div className="flex justify-between gap-3">
                    <MyBtn name="Submit" />
                    <button
                      type="button"
                      className="bg-black rounded-2xl py-3 md:px-8 px-5 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </MyFormWrapper>
              </div>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddSubscriptionModal;
