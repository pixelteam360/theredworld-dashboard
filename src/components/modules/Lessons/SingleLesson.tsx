/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSingleLessonQuery } from "@/redux/features/lessons/lessons.api";
import { useParams } from "next/navigation";
import TransletionModal from "./TransletionModal";
import Spinner from "@/components/common/Spinner";

const SingleLesson = () => {
  const { id } = useParams();
  const { data, isFetching } = useSingleLessonQuery(id);

 if(isFetching){
  return <Spinner />
 }

  const translations = data?.data?.lessonTranslations;

  return (
    <div className="max-w-5xl bg-white mx-auto px-7 py-3 rounded-2xl">
      <h1 className="text-2xl font-medium">{data?.data?.title}</h1>
      <audio controls className="h-10 w-64 my-5">
        <source src={data?.data?.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {translations?.map((item: any) => (
        <div key={item.id} className="my-2 flex gap-2 ">
          <p>{item?.english}</p>
          <TransletionModal id={item.id} title={item.english}/>
        </div>
      ))}
    </div>
  );
};

export default SingleLesson;
