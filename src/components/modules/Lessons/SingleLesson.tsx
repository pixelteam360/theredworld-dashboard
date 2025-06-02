/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useSingleLessonQuery } from "@/redux/features/lessons/lessons.api";
import { useParams } from "next/navigation";
import Spinner from "@/components/common/Spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransletionModal from "./TransletionModal";
import EditLessonModal from "./Modal/EditLessonModal";

const SingleLesson = () => {
  const { id } = useParams();
  const { data, isFetching } = useSingleLessonQuery(id);

  if (isFetching) {
    return <Spinner />;
  }

  const lessonData = data?.data;
  console.log(lessonData);
  return (
    <div className="max-w-5xl bg-white mx-auto px-7 py-3 rounded-2xl">
      <h1 className="text-2xl font-medium">{data?.data?.title} </h1>

      <Tabs defaultValue="Main Story" className="w-full my-8">
        <TabsList>
          <TabsTrigger value="Main Story">Main Story</TabsTrigger>
          <TabsTrigger value="Vocabulary">Vocabulary</TabsTrigger>
          <TabsTrigger value="Mini Story">Mini Story</TabsTrigger>
        </TabsList>
        <TabsContent value="Main Story">
          <audio controls className="h-10 w-64 my-5">
            <source src={lessonData?.mainStory} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {lessonData?.mainTranslations?.map((item: any) => (
            <div key={item.id} className="my-2 flex gap-2 ">
              <p>{item?.english}</p>
              <TransletionModal id={item.id} title={item.english} type="main" />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="Vocabulary">
          {lessonData?.vocabulary ? (
            <audio controls className="h-10 w-64 my-5">
              <source src={lessonData?.vocabulary} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <EditLessonModal
              id={lessonData.id}
              name="Add Vocabulary"
              audioType="vocabulary"
              btn="text"
              lessonNumber={lessonData.lessonNumber}
            />
          )}

          {lessonData?.vocabularyTranslations?.map((item: any) => (
            <div key={item.id} className="my-2 flex gap-2 ">
              <p>{item?.english}</p>
              <TransletionModal
                id={item.id}
                title={item.english}
                type="vocabolary"
              />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="Mini Story">
          {lessonData?.miniStory ? (
            <audio controls className="h-10 w-64 my-5">
              <source src={lessonData?.miniStory} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <EditLessonModal
              id={lessonData.id}
              name="Add Mini Story"
              audioType="miniStory"
              btn="text"
              lessonNumber={lessonData.lessonNumber}
            />
          )}

          {lessonData?.miniTranslations?.map((item: any) => (
            <div key={item.id} className="my-2 flex gap-2 ">
              <p>{item?.english}</p>
              <TransletionModal id={item.id} title={item.english} type="mini" />
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SingleLesson;
