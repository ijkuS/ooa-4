import React from 'react';
import '@/app/globals.css';
import Navbar from '@/components/Header';

export default function MyApp({ Component, pageProps }) {
	return (
		<main className='main-wrapper'>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
