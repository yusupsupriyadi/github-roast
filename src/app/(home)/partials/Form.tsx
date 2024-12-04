'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Language } from '@/components/global.types';
import { AppStore, appStore } from '@/module/store';

export const Form = ({ languages }: { languages: Language[] }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userNameGithub, setUserNameGithub] = useState('yusupsupriyadi');
	const [selectedLanguage, setSelectedLanguage] = useState('English');
	const setResultRoasted = appStore(
		(state: AppStore) => state.setResultRoasted,
	);

	const handleSubmit = async () => {
		setIsLoading(true);
		const response = await fetch('/api/roasted', {
			method: 'POST',
			body: JSON.stringify({
				userNameGithub,
				language: selectedLanguage,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			setResultRoasted(data.data);
		}

		setIsLoading(false);
	};

	return (
		<section className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-0'>
			<Input
				placeholder='Username'
				value={userNameGithub}
				onChange={(e) => setUserNameGithub(e.target.value)}
			/>

			<Select
				selectedLanguage={selectedLanguage}
				setSelectedLanguage={setSelectedLanguage}
				languages={languages}
			/>

			<Button
				onClick={handleSubmit}
				disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Roast Me!'}
			</Button>
		</section>
	);
};
