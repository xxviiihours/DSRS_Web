import React from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { useGetDailyPricesByItemQuery } from '@/features/dashboard/api/dashboardApi';
import { getDaisyUIColor, TheChart, TheLoader } from '@/shared';

function PriceHistoryChart({ item, player }) {
	const { data, isLoading } = useGetDailyPricesByItemQuery(
		item?.id && player?.id ? { itemId: item.id, playerId: player.id } : skipToken,
	);
	const basePrice = item?.basePrice;

	const chartData = data?.map((item) => {
		const diff = item.previousPrice - basePrice;

		return {
			date: item.date,
			value: diff,
			originalPrice: item.previousPrice,
			fill: diff >= 0 ? getDaisyUIColor('--color-success') : getDaisyUIColor('--color-error'),
		};
	});

	return (
		<TheChart>
			<h2 className='card-title'>PRICE HISTORY</h2>
			{isLoading ? (
				<TheLoader />
			) : (
				<BarChart
					style={{
						width: '100%',
						aspectRatio: 1.718,
						height: '300px',
					}}
					responsive
					data={chartData}
				>
					<CartesianGrid
						stroke={getDaisyUIColor('--color-base-content')}
						strokeDasharray='5 5'
					/>
					<XAxis dataKey='date' stroke={getDaisyUIColor('--color-base-content')} />
					<YAxis
						domain={['auto', 'auto']}
						tickFormatter={(v) => basePrice + v}
						stroke={getDaisyUIColor('--color-base-content')}
					/>
					<Bar
						dataKey='value'
						name={'Price Difference'}
						fill={getDaisyUIColor('--color-base-content')}
					/>
					<Legend
						align='top'
						wrapperStyle={{
							backgroundColor: 'transparent',
							color: '#fff',
						}}
					/>
					<Tooltip
						cursor={{ fill: 'rgba(255,255,255,0.04)' }}
						contentStyle={{
							backgroundColor: getDaisyUIColor('--color-base-200'),
							border: `1px solid ${getDaisyUIColor('--color-base-200')}`,
							color: getDaisyUIColor('--color-base-content'),
						}}
						wrapperStyle={{
							width: 'auto',
							backgroundColor: `${getDaisyUIColor('--color-base-200')}`,
						}}
					/>
				</BarChart>
			)}
		</TheChart>
	);
}

export default PriceHistoryChart;
