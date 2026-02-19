import React, { useEffect, useRef } from 'react';
function Home() {
	return (
		<div className='grid grid-cols-3 md:grid-cols-5 grid-rows-1  gap-4'>
			{/* header */}
			<div className='row-start-1 col-span-full text-center content-center'>header</div>
			{/*  */}
			{/* sidebar */}
			<div className='row-start-3 col-span-full md:col-span-1 md:row-start-2 content-center'>
				sidebar
			</div>
			{/*  */}

			{/* main content */}
			<div className='row-start-2 col-start-1 md:col-start-2 col-span-3 content-center text-center'>
				<div className='grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-4  p-4'>
					{/* chart */}
					<div className='row-span-1 col-span-full'>
						<div className='card  w-auto h-auto'>
							<div className='card-body'>
								{/* <h2 className='card-title'>Card title!</h2>
								<p>
									A card component has a figure, a body part, and inside body there are title
									and actions parts
								</p>
								<div className='card-actions justify-end'>
									<button className='btn'>Buy Now</button>
								</div> */}
							</div>
						</div>
					</div>

					<div className='row-start-2 col-span-2'>test</div>

					<div className='row-start-2 col-auto'>test</div>

					<div className='row-start-2 col-auto'>test</div>
				</div>
			</div>
			{/*  */}

			{/* leaderboards panel */}
			<div className='row-start-4 col-span-full md:col-span-1 md:row-start-2 md:row-end-3 content-center text-center'>
				rightbar
			</div>
			{/*  */}

			{/* footer */}
			<div className='row-start-5 md:row-start-3 col-span-full text-center content-center'>
				footer
			</div>
		</div>
	);
}

export default Home;
