'use client';
import { appStore } from '@/module/store';

export const ResultRoasted = () => {
	const resultRoasted = appStore((state: any) => state.resultRoasted);

	if (!resultRoasted) return null;

	return (
		<div className='mt-6 md:mt-8 pb-10 md:mb-20 max-w-2xl mx-auto'>
			<div className='bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-neutral-700 shadow-xl'>
				<div className='flex items-center gap-2 mb-4'>
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
				</div>
				<p className='text-neutral-300 leading-relaxed whitespace-pre-wrap animate-fade-in'>
					{resultRoasted}
				</p>
			</div>
		</div>
	);
};
