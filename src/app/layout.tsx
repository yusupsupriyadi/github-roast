import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Roasted Github',
	description: 'Roasted Github',
	keywords: ['github', 'roasted', 'roasting', 'github roasted'],
	authors: [{ name: 'Yusup Supriyadi', url: 'https://yusupsupriyadi.com' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='haax5TjmQaEaBSx5DH1lLfqYeHMTSY2MwWBA5eEMgww'
				/>
				<Script
					defer
					src='https://cloud.umami.is/script.js'
					data-website-id='5a6f226f-11ab-447d-9279-cbad080f6db2'></Script>
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
