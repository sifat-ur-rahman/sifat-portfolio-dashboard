import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSalesHistory: builder.query({
      query: () => ({
        url: "/sales-history",
        method: "GET",
      }),
      providesTags: ["sale"],
    }),
    addBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blog",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["sale"],
    }),
  }),
});

export const { useGetSalesHistoryQuery, useAddBlogMutation } = saleApi;
