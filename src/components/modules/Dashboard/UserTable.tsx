/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import userImage from "../../../assets/placeholders/user-placeholder.jpg";
import { useGetAllUserQuery } from "@/redux/features/dashboard/dashboard.api";

const UserTable = () => {
  const { data } = useGetAllUserQuery(undefined);

  const item = data?.data?.data;

  if (item?.length < 1) {
    return (
      <p className="text-xl font-medium text-primary text-center my-8">
        No data found
      </p>
    );
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base text-black">Student</TableHead>
            <TableHead className="text-base text-black">Email</TableHead>
            <TableHead className="text-base text-black">Phone</TableHead>
            <TableHead className="text-base text-black">Subscribed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {item?.map((item: any) => (
            <TableRow key={item?.id} className="text-base">
              <TableCell className="flex items-center gap-2">
                <Image
                  src={item?.image || userImage}
                  alt="image"
                  height={70}
                  width={70}
                  className="w-9 h-9 rounded-full"
                />
                {item?.fullName || "N/A"}
              </TableCell>
              <TableCell>{item?.email}</TableCell>
              <TableCell>{item?.phoneNumber || "N/A"}</TableCell>
              <TableCell
                className={
                  item?.activeSubscription ? "text-green-500" : "text-black"
                }
              >
                {item?.activeSubscription ? "true" : "false"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
