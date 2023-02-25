import { create } from 'zustand';
import { IFile } from '../models/IFile';

type openStore = {
  openFiles: IFile[];
}

export const useOpenStore = create<openStore>((set) => ({
  openFiles: [],
  setOpenFiles: (openFiles: IFile[]) => set({ openFiles }),
}));