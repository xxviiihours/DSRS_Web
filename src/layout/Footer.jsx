import React from 'react';

function Footer() {
	return (
		<footer className='flex footer sm:footer-horizontal footer-center text-base-content'>
			<aside className='size-14 grow'>
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</aside>
		</footer>
	);
}

export default Footer;
