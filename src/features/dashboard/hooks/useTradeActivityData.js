import { useGetTradeActivitiesQuery } from '@/features/dashboard/api/dashboardApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

const useTradeActivityData = () => {
	const id = useSelector((state) => state.player.id);
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
		tradeActivities: { tradeStats, tradeHistory },
		tradeActivityState: { isLoading, isError },
	};
};

export default useTradeActivityData;
