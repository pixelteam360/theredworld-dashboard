"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import React from "react";
import { FieldValues } from "react-hook-form";

const ChangePassForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput name="oldPassword" label="Old Password" />
        <MyFormInput name="newPassword" label="New Password" />

        <MyBtn name="Submit" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default ChangePassForm;
