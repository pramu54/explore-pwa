"use client"

import InstallPrompt from "@/components/installPrompt/InstallPrompt";
import { useEffect, useState } from "react"

const PwaDetector = ({children}) => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
            .register("/sw.js")
            .then((reg) => console.log("sw worker registered", reg))
            .catch(() => console.log("failed"))
        }
        return () => {
            window.removeEventListener("beforeinstallprompt", null)
        }
    }, []);

    return (
        <>
            {children}
            {deferredPrompt && <InstallPrompt />}
        </>
    );
}

export default PwaDetector