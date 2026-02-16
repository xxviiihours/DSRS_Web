import React from 'react';
import CardItem from '../components/CardItem';

function Home() {
	return (
		<div className='bg-gray-900 py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl'>
						From the blog
					</h2>
					<p className='mt-2 text-lg/8 text-gray-300'>
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
					<div className='flex max-w-xl flex-col justify-between'>
						<CardItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
