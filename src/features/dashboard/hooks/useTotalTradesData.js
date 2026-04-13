import { useGetTotalTradesQuery } from '@/features/dashboard/api/dashboardApi';
import { dateFormat } from '@/shared/utils';
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

const useTotalTradesData = () => {
	const id = useSelector((state) => state.player.id);
	const { data, isLoading, isError } = useGetTotalTradesQuery(id ? { id } : skipToken);

	const tradesData = data?.map((x) => {
		return {
			day: dateFormat(x.transactionDate),
			trades: x.totalTrades,
		};
	});
	return {
		tradesData,
		tradesState: {
			isLoading,
			isError,
		},
	};
};

export default useTotalTradesData;
