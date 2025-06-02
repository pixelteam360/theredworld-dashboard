/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Spinner from "@/components/common/Spinner";
import { useGetFoldersQuery } from "@/redux/features/folders/folder.api";
import FolderModal from "./FolderModal";
import Link from "next/link";
import DeleteModal from "@/components/common/DeleteModal";

const Folders = () => {
  const { data: mainCourse, isFetching } = useGetFoldersQuery([
    { name: "folderType", value: "MAIN" },
  ]);
  const { data: bonusCourse } = useGetFoldersQuery([
    { name: "folderType", value: "BONUS" },
  ]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className="grid md:grid-cols-2 md:gap-12 gap-6">
      <div className="bg-white p-5 rounded-2xl">
        <div className="flex justify-between gap-3">
          <h2 className="text-2xl font-medium mb-12">Main Courses</h2>
          <div className="inline-block">
            <FolderModal name="Main" type="MAIN" action="Create" />
          </div>
        </div>

        <div className="space-y-5">
          {mainCourse?.data.length < 1 && (
            <h2 className="text-primary text-center">No data found</h2>
          )}
          {mainCourse?.data?.map((item: any) => (
            <div key={item.id} className="relative">
              <Link
                href={`/folders/${item.id}?name=${item?.name}`}
                className="flex justify-between items-center hover:shadow-lg transition w-full bg-white rounded-2xl shadow-md p-5 "
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="bg-primary text-white rounded-full p-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h5l2 3h11v9H3V7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item?.folderNumber}. {item?.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {item?.totalLesson} items
                    </p>
                  </div>
                </div>
              </Link>
              <div className="absolute inset-0 right-2 flex gap-5 items-center justify-end">
                <FolderModal
                  action="Update"
                  name="Main"
                  type="MAIN"
                  btn="Icon"
                  id={item?.id}
                  defalultData={{
                    folderNumber: item?.folderNumber,
                    name: item?.name,
                  }}
                />
                <DeleteModal btn="icon" id={item.id} type="folder" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* col 2  */}
      <div className="bg-white p-5 rounded-2xl">
        <div className="flex justify-between gap-3">
          <h2 className="text-2xl font-medium mb-12">Bonus Courses</h2>
          <div className="inline-block">
            <FolderModal name="Bonus" type="BONUS" action="Create" />
          </div>
        </div>

        <div className="space-y-5">
          {bonusCourse?.data.length < 1 && (
            <h2 className="text-primary text-center">No data found</h2>
          )}
          {bonusCourse?.data?.map((item: any) => (
            <div key={item.id} className="relative">
              <Link
                href={`/folders/${item.id}?name=${item?.name}`}
                className="flex justify-between items-center hover:shadow-lg transition w-full bg-white rounded-2xl shadow-md p-5 "
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="bg-primary text-white rounded-full p-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h5l2 3h11v9H3V7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item?.folderNumber}. {item?.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {item?.totalLesson} items
                    </p>
                  </div>
                </div>
              </Link>

              <div className="absolute inset-0 right-2 flex gap-5 items-center justify-end">
                <FolderModal
                  action="Update"
                  name="Main"
                  type="MAIN"
                  btn="Icon"
                  id={item?.id}
                  defalultData={{
                    folderNumber: item?.folderNumber,
                    name: item?.name,
                  }}
                />
                <DeleteModal btn="icon" id={item.id} type="folder" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Folders;
