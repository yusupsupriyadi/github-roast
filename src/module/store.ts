import { create } from 'zustand';

export interface AppStore {
	resultRoasted: string;
	setResultRoasted: (resultRoasted: string) => void;
}

export const appStore = create<AppStore>((set) => ({
	resultRoasted: '',
	setResultRoasted: (resultRoasted: string) => set({ resultRoasted }),
}));
