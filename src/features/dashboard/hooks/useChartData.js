import { useGetDailyPricesByItemQuery } from '@/features/dashboard';
import { getDaisyUIColor } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import React, { useEffect, useState } from 'react';

const useChartData = ({ itemId, playerId }) => {
	const { data, isLoading } = useGetDailyPricesByItemQuery(
		itemId && playerId ? { itemId: itemId, playerId: playerId } : skipToken,
	);
	const [chartDataSet, setChartData] = useState([]);

	useEffect(() => {
		if (data) {
			const chartData = data.map((item) => {
				const diff = item.previousPrice - item.basePrice;

				return {
					date: item.date,
					value: diff,
					originalPrice: item.basePrice,
					currentPrice: item.previousPrice,
					percentage: item.percentage,
				};
			});
			setChartData(chartData);
		}
	}, [data, isLoading, setChartData]);

	return {
		chartDataSet,
		state: {
			isLoading,
		},
	};
};

export default useChartData;
