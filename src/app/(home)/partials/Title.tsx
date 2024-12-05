import Image from 'next/image';
import Link from 'next/link';

export const Title = () => {
	return (
		<div className='p-4 pt-[30vh] mx-auto w-full flex flex-col items-center justify-center'>
			<section className='flex items-center gap-2'>
				<Link
					href='https://www.producthunt.com/posts/roasted-github?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-roasted&#0045;github'
					target='_blank'>
					<Image
						src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=675521&theme=neutral'
						alt='Roasted&#0032;Github - Elevate&#0032;Your&#0032;GitHub&#0032;Profile&#0032;with&#0032;Precision&#0032;Roasting&#0046; | Product Hunt'
						style={{ width: '130px', height: '33px' }}
						width='140'
						height='33'
						priority
					/>
				</Link>

				<p className='text-neutral-500 text-sm'>|</p>

				<Link
					href='https://github.com/yusupsupriyadi/github-roast'
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
			</section>

			<h1 className='text-4xl mt-2 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
				Github Roasted
			</h1>
			<p className='mt-2 md:mt-4 font-normal text-sm md:text-base text-neutral-50 max-w-lg text-center mx-auto'>
				Brace yourself, we&apos;re going to roast your GitHub profile
				mercilessly!
			</p>
		</div>
	);
};
