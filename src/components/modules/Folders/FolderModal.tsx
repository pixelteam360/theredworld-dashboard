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
  useCreateFolderMutation,
  useUpdateFolderMutation,
} from "@/redux/features/folders/folder.api";
import { Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TDefaultData = {
  folderNumber: string;
  name: string;
};

const FolderModal = ({
  type,
  name,
  action,
  btn,
  defalultData,
  id,
}: {
  type: "MAIN" | "BONUS";
  name: string;
  action: "Create" | "Update";
  btn?: "Text" | "Icon";
  defalultData?: TDefaultData;
  id?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [createFolder] = useCreateFolderMutation();
  const [updateFolder] = useUpdateFolderMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const folderNumber = Number(parseFloat(data.folderNumber));

    if (action === "Update" && !folderNumber) {
      return toast.error("Invalid folder number", { id: toastId });
    }

    try {
      let res;

      if (action === "Create") {
        res = await createFolder({ ...data, folderType: type }).unwrap();
      } else if (action === "Update") {
        res = await updateFolder({
          id,
          data: { ...data, folderNumber },
        }).unwrap();
      }

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
        {btn === "Icon" ? (
          <DialogTrigger className=" text-primary ">
            <Pencil />
          </DialogTrigger>
        ) : (
          <DialogTrigger className="bg-primary rounded-lg py-2 md:px-6 px-4 text-white flex items-center gap-2">
            <Plus /> Add Folder
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-5 text-2xl">
              {name} Course Folder
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <MyFormWrapper onSubmit={handleSubmit} defaultValues={defalultData}>
            <MyFormInput
              name="name"
              label="Folder Name"
              placeholder="Enter name"
            />

            {action === "Update" && (
              <MyFormInput
                name="folderNumber"
                label="Folder Number"
                placeholder="Enter number"
              />
            )}

            <MyBtn name="Add" width="w-full" />
          </MyFormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FolderModal;
