import { ReactNode, useState } from "react"

const defaultLanguage = 'vi'

const LanguageContextProvider = ({children}: {children: ReactNode}) => {
    const [languageState, setLangugeSate] = useState(defaultLanguage);

    
}