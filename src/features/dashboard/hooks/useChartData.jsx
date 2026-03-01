import { useGetDailyPricesByItemQuery } from '@/features/dashboard';
import { getDaisyUIColor } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import React from 'react';

const useChartData = ({ item, player }) => {
	const { data, isLoading } = useGetDailyPricesByItemQuery(
		item?.id && player?.id ? { itemId: item.id, playerId: player.id } : skipToken,
	);
	const basePrice = item?.basePrice;

	const chartData = data?.map((item) => {
		const diff = item.previousPrice - basePrice;

		return {
			date: item.date,
			value: diff,
			originalPrice: item.basePrice,
			currentPrice: item.previousPrice,
			percentage: item.percentage,
			fill: diff >= 0 ? getDaisyUIColor('--color-success') : getDaisyUIColor('--color-error'),
		};
	});

	return {
		chart: {
			basePrice,
		},
		chartList: chartData,
		state: {
			isLoading,
		},
	};
};

export default useChartData;
