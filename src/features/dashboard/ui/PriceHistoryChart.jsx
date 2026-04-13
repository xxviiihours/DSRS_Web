import React from 'react';
import { Bar, BarChart, CartesianGrid, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import { TheChart, TheLoader } from '@/shared/components';
import { useThemeObserver } from '@/shared/hooks';
import { useDailyPriceData } from '@/features/dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { currencyFormat, getDaisyUIColor } from '@/shared/utils';

function PriceHistoryChart({ item, player }) {
	useThemeObserver();
	const { chartDataSet, state } = useDailyPriceData({ itemId: item?.id, playerId: player.id });
	return (
		<TheChart>
			<h2 className='card-title font-bold'>PRICE HISTORY</h2>
			<span className='font-bold text-xs opacity-60'>Last {chartDataSet.length} days</span>

			<div className='flex-1 min-h-0'>
				{state.isLoading ? (
					<TheLoader />
				) : (
					<BarChart responsive data={chartDataSet} style={{ width: '100%', height: '100%' }}>
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
						<Bar dataKey='value' shape={customBarShape} />
						<Tooltip cursor={false} content={CustomTooltip} />
					</BarChart>
				)}
			</div>
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
