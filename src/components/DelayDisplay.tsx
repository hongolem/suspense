import React, {useEffect, useState} from "react";

export const DelayDisplay: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    useEffect(() => {
        setMessage(null);
        sleep(3000).then(() => {
            setMessage('3 seconds have passed!');
        });
    }, []);
    return (
        <p>{message}</p>
    )
}