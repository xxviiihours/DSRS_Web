import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { currencyFormat, getDaisyUIColor, TheChart, TheLoader } from '@/shared';
import { useChartData } from '@/features/dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function PriceHistoryChart({ item, player }) {
	const { chartDataSet, state } = useChartData({ itemId: item?.id, playerId: player.id });
	return (
		<TheChart>
			<h2 className='card-title'>PRICE HISTORY</h2>
			{state.isLoading ? (
				<TheLoader />
			) : (
				<BarChart
					style={{
						width: '100%',
						aspectRatio: 1.718,
						height: '300px',
					}}
					responsive
					data={chartDataSet}
				>
					<CartesianGrid
						stroke={getDaisyUIColor('--color-base-content')}
						strokeDasharray='5 5'
					/>
					<XAxis dataKey='date' stroke={getDaisyUIColor('--color-base-content')} />
					<YAxis
						domain={['auto', 'auto']}
						tickFormatter={(v) => item.basePrice + v}
						stroke={getDaisyUIColor('--color-base-content')}
					/>
					<Bar dataKey='value' fill={getDaisyUIColor('--color-base-content')} />

					<Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} content={CustomTooltip} />
				</BarChart>
			)}
		</TheChart>
	);
}

const CustomTooltip = ({ active, payload, label }) => {
	if (!active || !payload || payload.length === 0) return null;

	const data = payload[0].payload;
	const isPositive = data.percentage >= 0;
	const currentPrice = data.currentPrice;
	return (
		<div className='bg-base-100 text-base-content px-4 py-2 rounded-2xl'>
			<div className='text-xs text-base-content mb-1'>{label}</div>
			<div
				className={`text-sm font-semibold slashed-zero tabular-nums font-mono ${isPositive ? 'text-green-400' : 'text-red-400'} `}
			>
				{currencyFormat(currentPrice)}{' '}
				{isPositive ? (
					<>
						<FontAwesomeIcon icon={faArrowTrendUp} /> (+{data.percentage}%)
					</>
				) : (
					<>
						<FontAwesomeIcon icon={faArrowTrendDown} /> ({data.percentage}%)
					</>
				)}
			</div>
		</div>
	);
};

export default PriceHistoryChart;
