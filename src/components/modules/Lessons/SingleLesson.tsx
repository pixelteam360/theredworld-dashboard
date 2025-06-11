/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSingleLessonQuery } from "@/redux/features/lessons/lessons.api";
import { useParams } from "next/navigation";
import Spinner from "@/components/common/Spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransletionModal from "./TransletionModal";
import AddLessonAudioModal from "./Modal/AddLessonAudioModal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SingleLesson = () => {
  const { id } = useParams();
  const { data, isFetching } = useSingleLessonQuery(id);

  if (isFetching) return <Spinner />;

  const lessonData = data?.data;

  return (
    <div className="max-w-5xl bg-white mx-auto px-7 py-3 rounded-2xl">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Link href={'/folders'} >
          <ArrowLeft className="text-primary"/>
          </Link>
          <h1 className="text-2xl font-medium">{lessonData?.title}</h1>
        </div>
        <AddLessonAudioModal />
      </div>

      {lessonData?.lessonAudios?.length > 0 ? (
        <Tabs
          defaultValue={lessonData.lessonAudios[0]?.id}
          className="w-full my-8"
        >
          <TabsList className="flex flex-wrap">
            {lessonData.lessonAudios.map((audio: any) => (
              <TabsTrigger key={audio.id} value={audio.id}>
                {audio.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {lessonData.lessonAudios.map((audio: any) => (
            <TabsContent key={audio.id} value={audio.id}>
              <div className="flex justify-between gap-5 items-center">
                <audio controls className="h-10 w-64 my-5">
                  <source src={audio.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {audio.audioTranslations?.map((translation: any) => (
                <div key={translation.id} className="my-2 flex gap-2">
                  <p>{translation.english}</p>
                  <TransletionModal
                    id={translation.id}
                    title={translation.english}
                    type="main"
                  />
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <p className="mt-4 text-gray-500">No audio lessons available.</p>
      )}
    </div>
  );
};

export default SingleLesson;
