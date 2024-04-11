import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface ILanguageContext{
    languageState: string,
    setLanguageState: Dispatch<SetStateAction<string>>;
}

export const LanguageContext = createContext<ILanguageContext>({
    languageState: 'vn',
    setLanguageState: () => {}
});



function LanguageProvider({children}: {children: ReactNode}) {
    const defaultLanguage = 'vn'
    const [languageState, setLanguageState] = useState(defaultLanguage);

    const languageContextData = {
        languageState,
        setLanguageState,
    }

    return(
        <LanguageContext.Provider value={languageContextData}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;