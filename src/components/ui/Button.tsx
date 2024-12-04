import { cn } from '@/lib/utils';

export const Button = ({
	children,
	onClick,
	disabled,
	className,
}: {
	children: React.ReactNode;
	onClick: () => void;
	disabled: boolean;
	className?: string;
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				'w-full md:w-auto px-6 py-2 bg-gradient-to-b from-neutral-50 to-neutral-400 text-neutral-900 font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed',
				className
			)}>
			{children}
		</button>
	);
};
