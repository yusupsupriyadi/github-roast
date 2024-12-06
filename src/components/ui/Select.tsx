import { Language } from '../global.types';

export const Select = ({
	selectedLanguage,
	setSelectedLanguage,
	languages,
}: {
	selectedLanguage: string;
	setSelectedLanguage: (language: string) => void;
	languages: Language[];
}) => {
	return (
		<select
			value={selectedLanguage}
			onChange={(e) => setSelectedLanguage(e.target.value)}
			className='md:w-[150px] w-full !h-[42px] px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 border-2 border-neutral-700 focus:border-neutral-500 focus:outline-none transition-colors [&>*]:bg-neutral-800  [&>option]:py-2'>
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
