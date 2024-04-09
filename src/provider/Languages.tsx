import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface ILanguageContext{
    languageState?: string,
    setLangugeSate?: Dispatch<Partial<string>>;
}

export const LanguageContext = createContext<ILanguageContext>({
    languageState: undefined,
    setLangugeSate: undefined
})