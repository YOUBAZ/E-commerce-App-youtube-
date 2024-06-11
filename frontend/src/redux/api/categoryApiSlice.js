import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constants";
export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (newCategory) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        body: newCategory,
      }),
    }),
    updateCategory: build.mutation({
      query: ({ categoryId, updatedCategory }) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "PUT",
        body: updatedCategory,
      }),
    }),
    deleteCategory: build.mutation({
      query: (categoryId) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "DELETE",
      }),
    }),
    fetchCategories: build.query({
      query: () => ({
        url: `${CATEGORY_URL}/categories`,
      }),
    }),
  }),
});
export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} = categoryApiSlice;
