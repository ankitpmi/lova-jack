import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {  
  label: string
};

type Actions = {  
  setLabel: (val: string) => void
};

export const useGlobalStore = create<State & Actions>()(
  devtools(set => ({
    label: 'Hello World',    
    setLabel: (val: string) =>
      set(state => ({
        ...state,
        label: val,
      })),    
  }))
);
