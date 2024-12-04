'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Spotlight } from '@/components/ui/spotlight';
import Link from 'next/link';

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [userNameGithub, setUserNameGithub] = useState('');
	const [resultAI, setResultAI] = useState('');
	const [selectedLanguage, setSelectedLanguage] = useState('English');

	return (
		<div className='relative h-screen'>
			<div className='fixed inset-0 bg-black/[0.96] bg-grid-white/[0.02] antialiased bg-boxes overflow-hidden'>
				<Spotlight
					className='-top-40 left-0 md:left-60 md:-top-20'
					fill='white'
				/>
			</div>

			<main className='relative px-4 md:px-0'>
				<div className='p-4 pt-[30vh] mx-auto w-full flex flex-col items-center justify-center'>
					<Link
						href='https://github.com/yusupsupriyadi/github-roasted'
						target='_blank'
						rel='noreferrer'
						className='group flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-neutral-700 text-xs font-medium text-neutral-200'>
						<svg
							className='w-4 h-4'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
								clipRule='evenodd'
							/>
						</svg>
						<span>Repository</span>
					</Link>

					<h1 className='text-3xl mt-2 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
						Github Roasted
					</h1>
					<p className='mt-2 md:mt-4 font-normal text-sm md:text-base text-neutral-50 max-w-lg text-center mx-auto'>
						Enter your Github username to get roasted.
					</p>
				</div>
				<section className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-0'>
					<Input
						placeholder='Username'
						value={userNameGithub}
						onChange={(e) => setUserNameGithub(e.target.value)}
					/>

					<Select
						selectedLanguage={selectedLanguage}
						setSelectedLanguage={setSelectedLanguage}
						languages={[]}
					/>

					<Button
						onClick={() => {}}
						disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Roast Me!'}
					</Button>
				</section>
				{resultAI && (
					<div className='mt-6 md:mt-8 pb-10 md:mb-20 max-w-2xl mx-auto'>
						<div className='bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-neutral-700 shadow-xl'>
							<div className='flex items-center gap-2 mb-4'>
								<div className='w-3 h-3 rounded-full bg-red-500'></div>
								<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
								<div className='w-3 h-3 rounded-full bg-green-500'></div>
							</div>
							<p className='text-neutral-300 leading-relaxed whitespace-pre-wrap animate-fade-in'>
								{resultAI}
							</p>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
