import createStore from 'zustand';
import { ILoginForm } from '../../types/LoginForm';

export interface IZustand {
  userZustand: ILoginForm;
  setUserZustand: (user: ILoginForm) => void;
  clearUserZustand: () => void;
}

// create a store to hold our application's state
export const useAppStore = createStore<IZustand>((set) => ({
  userZustand: null,
  setUserZustand: (user: ILoginForm) => set((state) => ({ ...state, userZustand: user })),
  clearUserZustand: () => set((state) => ({ ...state, userZustand: null })),
}));
