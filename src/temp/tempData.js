export const data = [
	{
		name: 'Page A',
		uv: 5400,
		pv: -2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 4300,
		pv: -4567,
		amt: 2400,
	},
	{
		name: 'Page A',
		uv: 1400,
		pv: -2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3200,
		pv: -4567,
		amt: 2400,
	},
	{
		name: 'Page A',
		uv: 1400,
		pv: -2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3200,
		pv: -4567,
		amt: 2400,
	},
];

export const prototypeData = [
	{
		basePrice: 500,
		previousPrice: 400,
		type: 0,
		date: '2026-02-16',
	},
	{
		basePrice: 500,
		previousPrice: 400,
		type: 0,
		date: '2026-02-15',
	},
	{
		basePrice: 500,
		previousPrice: 400,
		type: 0,
		date: '2026-02-14',
	},
	{
		basePrice: 500,
		previousPrice: 539,
		type: 1,
		date: '2026-02-13',
	},
	{
		basePrice: 500,
		previousPrice: 390,
		type: 0,
		date: '2026-02-12',
	},
	{
		basePrice: 500,
		previousPrice: 539,
		type: 1,
		date: '2026-02-11',
	},
];

export const generatePerformanceData = () => {
	const data = [];
	let balance = 10000;

	for (let i = 30; i >= 0; i--) {
		const date = new Date();
		date.setDate(date.getDate() - i);

		const change = (Math.random() - 0.4) * 500;
		balance = Math.max(5000, balance + change);

		data.push({
			date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
			balance: Math.floor(balance),
			profit: Math.floor(change),
		});
	}

	return data;
};

export const generateWeeklyActivity = () => {
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	return days.map((day) => ({
		day,
		trades: Math.floor(Math.random() * 20) + 5,
		profit: Math.floor(Math.random() * 1000) - 300,
	}));
};
