import { useGetDailyPricesByItemQuery } from '@/features/dashboard';
import { getDaisyUIColor } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import React, { useEffect, useState } from 'react';

const useChartData = ({ itemId, playerId }) => {
	const { data, isLoading } = useGetDailyPricesByItemQuery(
		itemId && playerId ? { itemId: itemId, playerId: playerId } : skipToken,
	);
	const [chartList, setChartList] = useState([]);

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
					fill:
						diff >= 0 ? getDaisyUIColor('--color-success') : getDaisyUIColor('--color-error'),
				};
			});
			setChartList(chartData);
		}
	}, [data, isLoading, setChartList]);

	return {
		chartList,
		state: {
			isLoading,
		},
	};
};

export default useChartData;
