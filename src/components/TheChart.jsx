import React from 'react';
import { getDaisyUIColor } from '../utils/colorHelper';
import { useGetDailyPricesByItemQuery } from '../features/dashboard/api/dashboardApi';
import { skipToken } from '@reduxjs/toolkit/query';

function TheChart({ children }) {
	return (
		<div className='card w-auto h-100 bg-base-100 row-start-1 col-start-1 col-span-full'>
			<div className='card-body rechart-wrapper'>{children}</div>
		</div>
	);
}

export default TheChart;
