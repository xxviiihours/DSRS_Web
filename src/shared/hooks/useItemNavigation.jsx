import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItem } from '../../features/item/model/itemSlice';

export const useItemNavigation = ({ data, carouselRef }) => {
	const dispatch = useDispatch();

	const [currentSlide, setCurrentSlide] = useState(0);

	const totalSlides = data?.length || 0;

	const nextItem = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

	const prevItem = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

	useEffect(() => {
		if (!data?.length) return;
		if (!carouselRef?.current) return;

		const width = carouselRef.current.offsetWidth;

		carouselRef.current.scrollTo({
			left: width * currentSlide,
			behavior: 'smooth',
		});

		dispatch(setItem(data[currentSlide]?.item));
	}, [currentSlide, carouselRef, data, dispatch]);

	return { currentSlide, nextItem, prevItem };
};
