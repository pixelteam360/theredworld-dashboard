/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Spinner from "@/components/common/Spinner";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  useCreatePrivacyMutation,
  usePrivacyQuery,
  useUpdatePrivacyMutation,
} from "@/redux/features/dashboard/dashboard.api";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const PrivacyPolicy = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [createTrams] = useCreatePrivacyMutation(undefined);
  const { data, isFetching } = usePrivacyQuery(undefined);
  const [updateTrams] = useUpdatePrivacyMutation();

  const trams = data?.data;

  const handleSubmit = async (TramsData: FieldValues) => {
    const toastId = toast.loading("Updating...");

    const tram = TramsData.description;

    const updatableData = {
      id: TramsData.id,
      data: { description: tram },
    };

    try {
      let res: any;
      if (trams.length <= 0) {
        res = await createTrams(TramsData);
      } else {
        res = await updateTrams(updatableData);
      }

      if (res?.data?.success) {
        toast.success("Update Successfully", { id: toastId });
        setIsEditing(false);
      } else {
        toast.error(res?.error?.data?.message || "Failed to Update", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Update");
    }
  };

  if (isFetching) {
    return <Spinner />;
  }

  const defaultTrams = trams[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl">
      <div className="flex justify-end">
        <button
          onClick={() => setIsEditing(true)}
          className="py-2 px-6 bg-primary rounded-lg text-white"
        >
          Edit
        </button>
      </div>
      <div className="space-y-5">
        <h1 className="md:text-2xl text-xl font-semibold">Privacy Policy</h1>

        {isEditing === false ? (
          trams?.map((item: any) => <p key={item?.id}>{item?.description}</p>)
        ) : (
          <MyFormWrapper onSubmit={handleSubmit} defaultValues={defaultTrams}>
            <MyFormInput
              name="description"
              type="textarea"
              rows={15}
              placeholder="Write Here"
            />

            <div className="flex justify-end">
              <div className="flex gap-5">
                <button
                  onClick={() => setIsEditing(false)}
                  type="button"
                  className="bg-gray-300  py-2 px-6 rounded-lg"
                >
                  Cancel
                </button>
                <button className="py-2 px-6 bg-primary rounded-lg text-white">
                  Save
                </button>
              </div>
            </div>
          </MyFormWrapper>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
