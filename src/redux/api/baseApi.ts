import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sifat-portfolio-server.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["sale", "product"],
  endpoints: () => ({}),
});
