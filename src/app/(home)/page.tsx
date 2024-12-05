/**
 * Home Page Component - Server Side Rendered (SSR)
 *
 * Komponen ini merender halaman utama aplikasi dan dijalankan di server side.
 * Menggunakan Next.js App Router dengan file convention 'page.tsx'.
 *
 * Fitur SSR yang diimplementasikan:
 * - Pembacaan file JSON languages secara server-side
 * - Hydration data ke client components
 *
 * @component
 * @returns {JSX.Element} Halaman utama aplikasi
 */

import { Background } from './partials/Background';
import { Title } from './partials/Title';
import { Form } from './partials/Form';
import { ResultRoasted } from './partials/ResultRoasted';
import { promises as fs } from 'fs';

export default async function Home() {
	const file = await fs.readFile(
		process.cwd() + '/public/json/languages.json',
		'utf8',
	);
	const languages = JSON.parse(file);

	return (
		<div className='relative h-screen'>
			<Background />
			<main className='relative px-4 md:px-0 h-full'>
				<Title />
				<Form languages={languages} />
				<ResultRoasted />
			</main>
		</div>
	);
}
