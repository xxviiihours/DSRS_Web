import React, { useEffect, useRef } from 'react';
import { Line, LineChart } from 'recharts';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Home() {
	const data = [
		{
			name: 'Page A',
			uv: 400,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 300,
			pv: 4567,
			amt: 2400,
		},
		{
			name: 'Page C',
			uv: 320,
			pv: 1398,
			amt: 2400,
		},
		{
			name: 'Page D',
			uv: 200,
			pv: 9800,
			amt: 2400,
		},
		{
			name: 'Page E',
			uv: 278,
			pv: 3908,
			amt: 2400,
		},
		{
			name: 'Page F',
			uv: 189,
			pv: 4800,
			amt: 2400,
		},
		{
			name: 'Page F',
			uv: 189,
			pv: 4800,
			amt: 2400,
		},
		{
			name: 'Page F',
			uv: 189,
			pv: 4800,
			amt: 2400,
		},
		{
			name: 'Page F',
			uv: 189,
			pv: 4800,
			amt: 2400,
		},
		{
			name: 'Page F',
			uv: 189,
			pv: 4800,
			amt: 2400,
		},
	];

	return (
		<div className='bg-base-200 grid grid-cols-3 md:grid-cols-5 grid-rows-1  gap-2'>
			{/* header */}
			<div className='bg-base-100 row-start-1 col-span-full text-center content-center'>
				<Header />
			</div>
			{/*  */}
			{/* sidebar */}
			<div className='bg-base-100 row-start-3 col-span-full md:col-span-1 md:row-start-2 content-center'>
				sidebar
			</div>
			{/*  */}

			{/* main content */}
			<div className='bg-base-100 row-start-2 col-start-1 md:col-start-2 col-span-3 content-center'>
				<div className='grid grid-cols-2 grid-rows-1 md:grid-cols-4 gap-4 p-2'>
					{/* chart */}
					<div className='row-start-1 md:row-start-1 col-span-2 md:col-span-full'>
						<div className='card w-auto h-86'>
							<div className='card-body'>
								<h2 className='card-title'>PRICE HISTORY</h2>
								<LineChart
									style={{ width: '100%', aspectRatio: 1.718, height: '270px' }}
									responsive
									data={data}
								>
									<Line dataKey='uv' />
								</LineChart>
							</div>
						</div>
					</div>

					<div className='row-start-2 md:row-start-2 col-span-2'>
						<div className='card bg-base-200 shadow-sm w-auto h-100'>
							<figure>
								<img
									src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
									alt='Shoes'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>
									$100.00
									<div className='badge badge-error'>LOW</div>
								</h2>
								<p>Sample content with price tag</p>
								<div className='card-actions justify-end mt-4'>
									<button className='btn btn-success btn-soft'>Buy</button>
									<button className='btn btn-error btn-soft'>Sell</button>
								</div>
							</div>
						</div>
					</div>

					<div className='row-start-3 md:row-start-2 col-span-1 md:col-auto'>
						<div className='row-start-1'>
							<div className='card bg-base-200 shadow-sm w-auto h-100'>
								<div className='card-body'>
									<h2 className='card-title'>
										$100.00
										<div className='badge badge-error'>LOW</div>
									</h2>
									<p>Sample content with price tag</p>
									<div className='card-actions justify-end mt-4'>
										<button className='btn btn-success btn-soft'>Buy</button>
										<button className='btn btn-error btn-soft'>Sell</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='row-start-3 md:row-start-2 col-span-1 md:col-auto'>
						<div className='row-start-2'>
							<div className='card bg-base-200 shadow-sm w-auto h-100'>
								<div className='card-body'>
									<h2 className='card-title'>
										$100.00
										<div className='badge badge-error'>LOW</div>
									</h2>
									<p>Sample content with price tag</p>
									<div className='card-actions justify-end mt-4'>
										<button className='btn btn-success btn-soft'>Buy</button>
										<button className='btn btn-error btn-soft'>Sell</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  */}

			{/* leaderboards panel */}
			<div className='bg-base-100 row-start-4 col-span-full md:col-span-1 md:row-start-2 md:row-end-3 content-center text-center0'>
				rightbar
			</div>
			{/*  */}

			{/* footer */}
			<div className='bg-base-100 row-start-5 md:row-start-3 col-span-full text-center content-center'>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
