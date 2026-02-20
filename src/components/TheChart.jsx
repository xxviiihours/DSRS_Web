import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { getDaisyUIColor } from '../utils/colorHelper';

function TheChart({ data, options = null }) {
	return (
		<div className='card w-auto h-100 bg-base-100 row-start-1 col-start-1 col-span-full'>
			<div className='card-body rechart-wrapper'>
				<h2 className='card-title'>PRICE HISTORY</h2>
				<BarChart
					style={{
						width: '100%',
						aspectRatio: 1.718,
						height: '300px',
					}}
					responsive
					data={data}
				>
					<CartesianGrid
						stroke={getDaisyUIColor('--color-base-content')}
						strokeDasharray='5 5'
					/>
					<XAxis dataKey='name' stroke={getDaisyUIColor('--color-base-content')} />
					<YAxis stroke={getDaisyUIColor('--color-base-content')} />
					<Bar
						activeBar={{ stroke: 'none', fillOpacity: 0.9 }}
						dataKey='uv'
						fill={getDaisyUIColor('--color-success')}
						barSize={50}
					/>
					<Bar
						activeBar={{ stroke: 'none', fillOpacity: 0.9 }}
						dataKey='pv'
						fill={getDaisyUIColor('--color-error')}
						barSize={50}
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
							width: 100,
							backgroundColor: `${getDaisyUIColor('--color-base-200')}`,
						}}
					/>
				</BarChart>
			</div>
		</div>
	);
}

export default TheChart;
