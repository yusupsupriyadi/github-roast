import { Language } from '../global.types';
import { twMerge } from 'tailwind-merge';

export const Select = ({
	selectedLanguage,
	setSelectedLanguage,
	languages,
}: {
	selectedLanguage: string;
	setSelectedLanguage: (language: string) => void;
	languages: Language[];
}) => {
	const selectClasses = twMerge(
		'w-full md:w-[150px]',
		'!h-[42px]',
		'px-4 py-2',
		'rounded-lg',
		'bg-neutral-800 text-neutral-100',
		'border-2 border-neutral-700',
		'focus:border-neutral-500 focus:outline-none',
		'transition-colors',
		'[&>*]:bg-neutral-800',
		'[&>option]:py-2',
	);

	return (
		<select
			value={selectedLanguage}
			onChange={(e) => setSelectedLanguage(e.target.value)}
			className={selectClasses}>
			{languages.map((language: Language, index: number) => (
				<option
					key={index}
					value={language.name}
					className='hover:bg-neutral-700 text-sm'>
					{language.name}
				</option>
			))}
		</select>
	);
};
