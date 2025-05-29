import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/globalType";

export const DashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    summary: builder.query({
      query: () => ({
        url: "/dashboard/summary",
        method: "GET",
      }),
    }),

    chart: builder.query({
      query: () => ({
        url: "/dashboard/charts",
        method: "GET",
      }),
    }),

    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.array.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
    }),

    purchesSubscription: builder.query({
      query: () => ({
        url: "/purchased-subscription",
        method: "GET",
      }),
    }),

    privacy: builder.query({
      query: () => ({
        url: "/privacy",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),

    createPrivacy: builder.mutation({
      query: (data) => ({
        url: `/privacy`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Privacy"],
    }),

    updatePrivacy: builder.mutation({
      query: (args) => ({
        url: `/privacy/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Privacy"],
    }),
  }),
});

export const {
  useSummaryQuery,
  useChartQuery,
  useGetAllUserQuery,
  usePurchesSubscriptionQuery,
  usePrivacyQuery,
  useCreatePrivacyMutation,
  useUpdatePrivacyMutation,
} = DashboardApi;
