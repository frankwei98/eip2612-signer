import React from "react";
import { UseWalletProvider } from "use-wallet";

export default function InjectedProviders({ children }) {
    return <UseWalletProvider>
    { children }
    </UseWalletProvider>
}