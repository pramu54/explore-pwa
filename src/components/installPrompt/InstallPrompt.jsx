"use client"

const InstallPrompt = ({deferredPrompt}) => {

    console.log("YEAAAAAAA")

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        return /iphone|ipad|ipod/.test(userAgent)
    }

    const promptAppInstall = async () => {
        if (isIos()) {
        // write pop-up message for IOS here.
        }
        if (!isIos()) {
            if (deferredPrompt) {
                deferredPrompt.prompt()
                await deferredPrompt.userChoice
                setDeferredPrompt(null)
            } else {
                // Do something when app is already installed
                alert("You have already installed app!")
            }
        }
    }

    return(
        <>
            {console.log("def: ", deferredPrompt)}
            <button onClick={promptAppInstall}>Add to Home Screen</button>
        </>
    )
}

export default InstallPrompt