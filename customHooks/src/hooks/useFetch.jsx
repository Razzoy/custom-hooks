import { useEffect, useState } from "react"

export function useFetch(url){

    const [data, setData] = useState(null);

    useEffect(()=>{
            fetch(url)
            .then((res) => res.json())
            .then((json)=> setData(json))

            .catch((error) => console.log(error));
    }, [url]);

    return {data};
}