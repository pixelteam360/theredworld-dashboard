import baseApi from "@/redux/api/baseApi";

export const SubscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscription: builder.query({
      query: () => ({
        url: "/subscription",
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),

    createSubscription: builder.mutation({
      query: (data) => ({
        url: "/subscription",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subscription"],
    }),

    updateSubscription: builder.mutation({
      query: (args) => ({
        url: `/subscription/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Subscription"],
    }),

    deleteSubscription: builder.mutation({
      query: (id) => ({
        url: `/subscription/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subscription"],
    }),
  }),
});

export const {
  useSubscriptionQuery,
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
  useDeleteSubscriptionMutation,
} = SubscriptionApi;
