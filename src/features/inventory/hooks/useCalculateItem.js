import { useInitDailyPricesQuery } from '@/features/market';
import { useSelector } from 'react-redux';

const useCalculateItem = ({ id }) => {
	const { inventoryItems } = useSelector((state) => state.player);
	const { data, isLoading, isUninitialized } = useInitDailyPricesQuery(
		id ? { id: id } : skipToken,
	);

	const itemDetails = inventoryItems.map((inventory) => {
		const result = data?.dailyPrices.find((p) => p.item.id === inventory.itemId);

		const profit = result?.price - result?.item.basePrice;
		const percent = Math.round((profit / result?.price) * 100);
		return {
			item: result?.item,
			currentPrice: result?.price,
			state: result?.state,
			quantity: inventory.quantity,
			profit: profit,
			percent: percent,
		};
	});

	const totalValue =
		inventoryItems.reduce((total, inventory) => {
			const currentPrice = data?.dailyPrices.find((p) => p.item.id === inventory.itemId);

			return total + (currentPrice?.price ?? 0) * inventory.quantity;
		}, 0) ?? 0;

	const profit =
		inventoryItems.reduce((total, inventory) => {
			const currentPrice = data?.dailyPrices.find((p) => p.item.id === inventory.itemId);

			return (
				total + ((currentPrice?.price ?? 0) - inventory.purchasePrice) * inventory.quantity
			);
		}, 0) ?? 0;

	return {
		data: {
			itemDetails,
			inventoryDetails: {
				totalValue,
				profit,
			},
			marketDetails: data?.dailyPrices,
		},
		state: {
			isLoading,
			isUninitialized,
		},
	};
};

export default useCalculateItem;
