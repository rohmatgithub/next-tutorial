import { create } from 'zustand';

interface MyState {
  value: string;
  setValue: (value: string) => void;
}

const useStore = create<MyState>((set) => ({
  value: 'initial value',
  setValue: (value) => set({ value }),
}));

export default useStore;