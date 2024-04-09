"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import client from '@/config/index';
import AuthContextProvider from "./AuthContextProvider"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={client}>
            <AuthContextProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </AuthContextProvider>
        </ApolloProvider >
    )
}