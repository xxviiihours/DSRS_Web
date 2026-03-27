import { useGetBalancePerformanceQuery } from '@/features/dashboard/api/dashboardApi';
import { dateFormat } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

const usePerformanceData = () => {
	const { id } = useSelector((state) => state.player);
	const { data: performanceData, isLoading } = useGetBalancePerformanceQuery(
		id ? { id: id } : skipToken,
	);

	const mappedData = performanceData?.map((data) => {
		return {
			...data,
			date: dateFormat(data.day),
		};
	});
	return {
		performanceData: mappedData,
		performanceState: {
			isLoading,
		},
	};
};

export default usePerformanceData;
