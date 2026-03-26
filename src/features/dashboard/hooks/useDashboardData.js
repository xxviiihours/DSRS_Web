import { useGetTradeActivitiesQuery } from '@/features/dashboard/api/dashboardApi';
import { skipToken } from '@reduxjs/toolkit/query';
import React from 'react';
import { useSelector } from 'react-redux';

const useDashboardData = ({ id }) => {
	const { data, isLoading, isError } = useGetTradeActivitiesQuery(id ? { id: id } : skipToken);

	return {
		data,
		state: { isLoading, isError },
	};
};

export default useDashboardData;
