import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/globalType";

export const FolderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFolders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/folder",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["Folder"],
    }),

    createFolder: builder.mutation({
      query: (data) => ({
        url: "/folder",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Folder"],
    }),

    folderLessons: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.data.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/folder/lessons/${args.id}`,
          method: "GET",
          params: params,
        };
      },

      providesTags: ["Lessons"],
    }),

    updateFolder: builder.mutation({
      query: (args) => ({
        url: `/folder/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Folder"],
    }),

    // deleteFolder: builder.mutation({
    //   query: (id) => ({
    //     url: `/subscription/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Subscription"],
    // }),
  }),
});

export const {
  useGetFoldersQuery,
  useCreateFolderMutation,
  useUpdateFolderMutation,
  useFolderLessonsQuery
} = FolderApi;
