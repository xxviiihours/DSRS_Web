import usePerformanceData from '@/features/dashboard/hooks/usePerformanceData';
import {
	currencyFormat,
	getDaisyUIColor,
	TheChart,
	TheLoaderInfo,
	useThemeObserver,
} from '@/shared';
import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

function BalancePerformanceChart({ data: performanceData, state }) {
	useThemeObserver();

	return (
		<div className='p-3'>
			<div className='mb-4'>
				<h3 className='font-bold'>Balance Performance</h3>
				<span className='font-bold text-xs opacity-60'>Last 30 days</span>
			</div>
			{state.isLoading ? (
				<TheLoaderInfo />
			) : (
				<>
					{performanceData?.length < 1 ? (
						<>NO DATA</>
					) : (
						<TheChart>
							<AreaChart
								data={performanceData}
								responsive
								style={{ width: '100%', aspectRatio: 1.718, height: '345px' }}
							>
								<defs>
									<linearGradient id='balanceGradient' x1='0' y1='0' x2='0' y2='1'>
										<stop offset='5%' stopColor='#60A5FA' stopOpacity={0.3} />
										<stop offset='95%' stopColor='#60A5FA' stopOpacity={0} />
									</linearGradient>
								</defs>
								<CartesianGrid
									strokeDasharray='3 3'
									stroke={getDaisyUIColor('--color-base-content')}
								/>
								<XAxis
									dataKey='date'
									stroke={getDaisyUIColor('--color-base-content')}
									tick={{ fill: getDaisyUIColor('--color-base-content'), fontSize: 12 }}
									interval={5}
								/>
								<YAxis
									stroke={getDaisyUIColor('--color-base-content')}
									tick={{ fill: getDaisyUIColor('--color-base-content'), fontSize: 12 }}
								/>
								<Tooltip
									labelStyle={{ color: getDaisyUIColor('--color-white') }}
									content={CustomTooltip}
								/>
								<Area
									type='monotone'
									dataKey='balance'
									stroke='#60A5FA'
									fillOpacity={1}
									fill='url(#balanceGradient)'
									strokeWidth={2}
								/>
							</AreaChart>
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
			<div className='text-xs text-info mb-1'>Balance: {currencyFormat(data.balance)}</div>
		</div>
	);
};

export default BalancePerformanceChart;
