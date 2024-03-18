import './App.css'
import {Suspense} from "react";
import IPFetcher from "./components/IPFetcher.tsx";
import {DelayDisplay} from "./components/DelayDisplay.tsx";

function App() {

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <IPFetcher ip="31.30.172.213" />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <DelayDisplay />
            </Suspense>
        </>
    )
}

export default App
