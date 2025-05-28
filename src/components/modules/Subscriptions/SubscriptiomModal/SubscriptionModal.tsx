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
import {
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
} from "@/redux/features/subscription/subscription.api";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

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
  const [create] = useCreateSubscriptionMutation();
  const [update] = useUpdateSubscriptionMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    const price = parseFloat(data.price);
    if (isNaN(price) || price <= 0) {
      toast.error("Invalid price. Please enter a valid decimal number.", {
        id: toastId,
      });
      return;
    }

    const duration = parseInt(data.duration, 10);
    if (isNaN(duration) || duration <= 0) {
      toast.error("Invalid duration. Please enter a valid number of days.", {
        id: toastId,
      });
      return;
    }

    const formdata = { title: data.title, price, duration };

    try {
      let res;

      if (type === "Add") {
        res = await create({ ...data, price, duration }).unwrap();
      } else if (type === "Edit") {
        res = await update({ id: payload?.id, data: formdata }).unwrap();
      }

      if (res) {
        setOpen(false);
        return toast.success("Update Successfull", { id: toastId });
      }
    } catch (err: any) {
      setOpen(false);
      toast.error(err.data?.message || "Faild to Update", { id: toastId });
    }
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
                  <MyFormInput name="title" label="Title" placeholder="Monthly Plan"/>
                  <MyFormInput name="duration" label="Duration (day)" placeholder="120" />
                  <MyFormInput name="price" label="Price" placeholder="49.00"/>

                  <MyBtn name="Submit" width="w-full" />
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
