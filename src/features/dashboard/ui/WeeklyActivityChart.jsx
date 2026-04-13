import { TheChart, TheLoaderInfo } from '@/shared/components';
import { useThemeObserver } from '@/shared/hooks';
import { getDaisyUIColor } from '@/shared/utils';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

function WeeklyActivityChart({ data: weeklyActivity, state }) {
	console.log(weeklyActivity);
	useThemeObserver();

	return (
		<div className='p-3'>
			<div className='mb-4'>
				<h3 className='font-bold'>Weekly Activity</h3>
				<span className='font-bold text-xs opacity-60'>Trades per day</span>
			</div>
			{state.isLoading ? (
				<TheLoaderInfo />
			) : (
				<>
					{weeklyActivity.length < 1 ? (
						'NO DATA'
					) : (
						<TheChart>
							<BarChart
								data={weeklyActivity}
								responsive
								style={{ width: '100%', aspectRatio: 1.718, height: '345px' }}
							>
								<CartesianGrid
									strokeDasharray='3 3'
									stroke={getDaisyUIColor('--color-base-content')}
								/>
								<XAxis
									dataKey='day'
									stroke={getDaisyUIColor('--color-base-content')}
									tick={{ fill: getDaisyUIColor('--color-base-content') }}
								/>
								<YAxis
									stroke={getDaisyUIColor('--color-base-content')}
									tick={{ fill: getDaisyUIColor('--color-base-content') }}
								/>
								<Tooltip
									cursor={false}
									content={CustomTooltip}
									labelStyle={{ color: getDaisyUIColor('--color-white') }}
								/>
								<Bar dataKey='trades' fill='#60A5FA' radius={[8, 8, 0, 0]} />
							</BarChart>
						</TheChart>
					)}
				</>
			)}
		</div>
	);
}

const CustomTooltip = ({ active, payload, label }) => {
	if (!active || !payload || payload.length === 0) return null;

	const data = payload[0].payload;
	return (
		<div className='bg-base-200 text-base-content px-4 py-2 rounded-2xl'>
			<div className='text-xs text-base-content mb-1'>{label}</div>
			<div className='text-xs text-info mb-1'>Trades: {data.trades}</div>
		</div>
	);
};

export default WeeklyActivityChart;
