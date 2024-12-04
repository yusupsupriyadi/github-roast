import { Spotlight } from "@/components/ui/spotlight";

export const Background = () => {
	return (
		<div className='fixed inset-0 bg-black/[0.96] bg-grid-white/[0.02] antialiased bg-boxes overflow-hidden'>
			<Spotlight
				className='-top-40 left-0 md:left-60 md:-top-20'
				fill='white'
			/>
		</div>
	);
};
