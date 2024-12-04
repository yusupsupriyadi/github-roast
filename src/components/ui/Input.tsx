import { cn } from '@/lib/utils';

export const Input = ({
	placeholder,
	value,
	onChange,
	className,
}: {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}) => {
	return (
		<input
			type='text'
			value={value}
			onChange={onChange}
			className={cn(
				'w-full md:w-auto px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 border-2 border-neutral-700 focus:border-neutral-500 focus:outline-none transition-colors',
				className
			)}
			placeholder={placeholder}
		/>
	);
};
