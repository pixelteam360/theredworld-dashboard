import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/globalType";

export const LessonsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    lessons: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/lesson",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Lessons"],
    }),

    singleLesson: builder.query({
      query: (id) => ({
        url: `/lesson/${id}`,
        method: "GET",
      }),
      providesTags: ["Lessons"],
    }),

    createlesson: builder.mutation({
      query: (data) => ({
        url: `/lesson`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Lessons"],
    }),

    updateLesson: builder.mutation({
      query: (args) => ({
        url: `/lesson/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Lessons"],
    }),

    deleteLesson: builder.mutation({
      query: (id) => ({
        url: `/lesson/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lessons"],
    }),

    updateTranslation: builder.mutation({
      query: (args) => ({
        url: `/lesson/lesson-translation/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Lessons"],
    }),

    addLessonAudio: builder.mutation({
      query: (data) => ({
        url: `/lesson-audio`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Lessons"],
    }),

    updateLessonAudio: builder.mutation({
      query: (args) => ({
        url: `/lesson-audio/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Lessons"],
    }),
  }),
});

export const {
  useLessonsQuery,
  useSingleLessonQuery,
  useCreatelessonMutation,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
  useUpdateTranslationMutation,
  useAddLessonAudioMutation,
  useUpdateLessonAudioMutation
} = LessonsApi;
