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

const UserTable = () => {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base text-black">Student</TableHead>
            <TableHead className="text-base text-black">Email</TableHead>
            <TableHead className="text-base text-black">Phone</TableHead>
            <TableHead className="text-base text-black">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {item?.map((item, idx) => (
            <TableRow key={idx} className="text-base">
              <TableCell className="flex items-center gap-2">
                <Image
                  src={userImage}
                  alt="image"
                  height={70}
                  width={70}
                  className="w-9 h-9 rounded-full"
                />
                Student Name
              </TableCell>
              <TableCell>example@gamil.com</TableCell>
              <TableCell>123456789</TableCell>
              <TableCell>Enrolled</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
