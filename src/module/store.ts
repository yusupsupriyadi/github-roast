import { create } from 'zustand';

export const appStore = create((set) => ({
	userNameGithub: '',
	setUserNameGithub: (userNameGithub: string) => set({ userNameGithub }),

	resultRoasted: '',
	setResultRoasted: (resultRoasted: string) => set({ resultRoasted }),
}));
