import React from 'react';
import { Bar, BarChart, CartesianGrid, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import {
	currencyFormat,
	getDaisyUIColor,
	TheChart,
	TheLoader,
	useThemeObserver,
} from '@/shared';
import { useDailyPriceData } from '@/features/dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function PriceHistoryChart({ item, player }) {
	useThemeObserver();
	const { chartDataSet, state } = useDailyPriceData({ itemId: item?.id, playerId: player.id });
	return (
		<TheChart>
			<h2 className='card-title font-bold'>PRICE HISTORY</h2>
			<span className='font-bold text-xs opacity-60'>Last {chartDataSet.length} days</span>
			{state.isLoading ? (
				<TheLoader />
			) : (
				<BarChart
					style={{
						width: '100%',
						aspectRatio: 1.718,
						height: '330px',
					}}
					responsive
					data={chartDataSet}
				>
					<CartesianGrid
						stroke={getDaisyUIColor('--color-base-content')}
						// stroke={primary}
						strokeDasharray='5 5'
					/>
					<XAxis
						dataKey='date'
						stroke={getDaisyUIColor('--color-base-content')}
						// stroke={primary}
					/>
					<YAxis
						domain={['auto', 'auto']}
						tickFormatter={(v) => item.basePrice + v}
						stroke={getDaisyUIColor('--color-base-content')}
					/>
					<Bar dataKey='value' shape={customBarShape} />

					<Tooltip cursor={false} content={CustomTooltip} />
				</BarChart>
			)}
		</TheChart>
	);
}

const customBarShape = (props) => {
	const fill =
		props.value >= 0 ? getDaisyUIColor('--color-success') : getDaisyUIColor('--color-error');
	return <Rectangle {...props} fill={fill} />;
};

const CustomTooltip = ({ active, payload, label }) => {
	if (!active || !payload || payload.length === 0) return null;

	const data = payload[0].payload;
	const isPositive = data.percentage >= 0;
	const currentPrice = data.currentPrice;
	return (
		<div className='bg-base-200 px-4 py-2 rounded-2xl'>
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
