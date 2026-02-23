import React, { useRef, useState } from 'react';

function ContentSlideLayout({ children }) {
	const carouselRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = 2;

	// Scroll to a slide
	const goToSlide = (index) => {
		if (carouselRef.current) {
			carouselRef.current.scrollTo({
				left: carouselRef.current.offsetWidth * index,
				behavior: 'smooth',
			});
		}
	};

	// Next / Prev buttons
	const nextSlide = () => goToSlide((currentSlide + 1) % slides);
	const prevSlide = () => goToSlide((currentSlide - 1 + slides) % slides);

	return (
		<div className='row-start-2 col-start-1 md:col-start-2 col-span-3 overflow-hidden'>
			<div className='flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth'>
				{children}
			</div>
			{/* Navigation buttons inside main content */}
			<div className='absolute top-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2'>
				<button onClick={prevSlide} className='btn btn-circle bg-white/80 hover:bg-white'>
					❮
				</button>
				<button onClick={nextSlide} className='btn btn-circle bg-white/80 hover:bg-white'>
					❯
				</button>
			</div>

			{/* Indicator dots */}
			<div className='absolute bottom-2 left-0 right-0 flex justify-center space-x-2'>
				{[...Array(slides)].map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx)}
						className={`w-3 h-3 rounded-full ${
							currentSlide === idx ? 'bg-primary' : 'bg-gray-400'
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default ContentSlideLayout;
