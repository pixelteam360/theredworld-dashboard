/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePassForm = () => {
  const [changePassword] = useChangePasswordMutation()

  const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Uploading...");

        try {
          const res = await changePassword(data).unwrap();
    
          if (res) {
            return toast.success("Uploded Successfully", { id: toastId });
          }
        } catch (err: any) {
          toast.error(err.data?.message || "Faild to Upload", { id: toastId });
        }
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput name="oldPassword" label="Old Password" placeholder="enter password"/>
        <MyFormInput name="newPassword" label="New Password" placeholder="enter password"/>

        <MyBtn name="Submit" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default ChangePassForm;
