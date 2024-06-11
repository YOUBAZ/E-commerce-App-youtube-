import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../constants'
const baseQuery = fetchBaseQuery({baseURL: BASE_URL})
export  const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "Order", "User", "Category"],
    endpoints: () => ({}),
})