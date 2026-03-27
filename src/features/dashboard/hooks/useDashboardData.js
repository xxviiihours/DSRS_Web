import { useGetTradeActivitiesQuery } from '@/features/dashboard/api/dashboardApi';
import { skipToken } from '@reduxjs/toolkit/query';

const useDashboardData = ({ id }) => {
	const {
		data: tradeHistory,
		isLoading,
		isError,
	} = useGetTradeActivitiesQuery(id ? { id: id } : skipToken);

	const totalSales = tradeHistory?.filter((trade) => trade.type === 1).length;

	const totalProfit = tradeHistory
		?.filter((t) => t.type === 1)
		.reduce((sum, t) => sum + t.priceTotal, 0);

	const tradeStats = {
		totalProfit,
		totalSales,
	};
	return {
		data: { tradeStats, tradeHistory },
		state: { isLoading, isError },
	};
};

export default useDashboardData;
