import { useCallback, useEffect, useState } from "react"


export const useFetch = (url, config) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);


    const handleFetch = useCallback(async () => {

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const products = await response.json();
            setProducts(products);
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        if (products.length === 0) handleFetch();
    }, []);

    return {
        products,
        loading,
    }

}

