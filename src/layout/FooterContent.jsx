import React from 'react';

function FooterContent({ children = null }) {
	return (
		<footer className='bg-base-100 row-start-6 lg:row-start-3 col-span-full text-center content-center'>
			<div className=' flex footer sm:footer-horizontal footer-center text-base-content'>
				<aside className='size-10 grow'>
					<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
				</aside>
			</div>
		</footer>
	);
}

export default FooterContent;
