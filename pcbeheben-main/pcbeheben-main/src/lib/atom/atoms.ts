import { atom } from "jotai";

export const currentStepAtom = atom<number>(0);
export const selectedServiceAtom = atom<string | null>(null);


export const storeAtom = atom({ })
