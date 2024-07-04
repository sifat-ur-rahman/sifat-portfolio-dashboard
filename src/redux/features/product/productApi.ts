import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: `projects`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProject: builder.mutation({
      query: (project) => ({
        url: "/project",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["product"],
    }),
    updatedProject: builder.mutation({
      query: (updatedData) => ({
        url: `/project/${updatedData.id}`,
        method: "PUT",
        body: updatedData.productData,
      }),
      invalidatesTags: ["product"],
    }),
    duplicateProduct: builder.mutation({
      query: (updatedData) => ({
        url: `/duplicate/${updatedData.id}`,
        method: "POST",
        body: updatedData.productData,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (Data) => ({
        url: `/project/${Data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    bulkDeleteProduct: builder.mutation({
      query: (data) => ({
        url: "/bulk-delete",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProjectMutation,
  useUpdatedProjectMutation,
  useDuplicateProductMutation,
  useDeleteProductMutation,
  useGetAllProductQuery,
  useBulkDeleteProductMutation,
} = productApi;
