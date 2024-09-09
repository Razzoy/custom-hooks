import { useEffect, useState } from "react"

export function useImages(){
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //glob path
        //Images kommer som et object, så brug object keys
        let imagePaths = [];

        setImages(imagePaths);
        setLoading(false);
    }, []);

    return {images, loading}
}