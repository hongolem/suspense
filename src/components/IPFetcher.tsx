import React, {useState, useEffect} from "react";

type IPFetcherProps = {
    ip: string;
}

type IPFetcherResult = {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
}

const IPFetcher: React.FC<IPFetcherProps> = ({ip}) => {
    const [result, setResult] = useState<IPFetcherResult | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(`https://ipinfo.io/${ip}/geo`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {console.log(response); return response.json();})
        .then(data => {
            console.log(data);
            setResult(data);
        })
        .catch (error => {
            console.error(error);
            setError(error);
        })
    }, [ip]);
    return(
        <div>
            
        </div>
    );
}

export default IPFetcher;