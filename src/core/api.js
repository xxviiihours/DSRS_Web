import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './base/axiosBaseQuery';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:5223' }),
	tagTypes: ['Players', 'Items', 'Inventory', 'DailyPrices'],
	endpoints: () => ({}),
});
