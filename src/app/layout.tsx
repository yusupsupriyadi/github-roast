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
	description:
		'Roasted Github - Elevate your GitHub Profile with Precision Roasting. Get in-depth analysis and constructive feedback to make your GitHub profile more engaging and professional.',
	keywords: ['github', 'roasted', 'roasting', 'github roasted'],
	authors: [{ name: 'Yusup Supriyadi', url: 'https://yusupsupriyadi.com' }],
	robots: 'index, follow',
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
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-FMZF47PZWN'></Script>
				<Script
					id='google-analytics'
					strategy='afterInteractive'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-FMZF47PZWN');
					`}
				</Script>
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
