import { useEffect, useState } from 'react'
import { useApi } from '../useApi'
import { UseProductState } from './Interface';

export const useSingleProductDetail = (id: number) => {
    const { fetchSingleProduct } = useApi();
    const [state, setState] = useState<UseProductState>({
        data: null,
        loading: true
    })

    const fetchProduct = async () => {
        try {
            const response = await fetchSingleProduct(id);
            const productData = {
                ...response,
                name: response?.title || "Unknown Product",
                price: response?.price || 0,
                image: response?.images[0] || null,
                description: response?.description,
                reviews: response?.reviews,
                category:response?.category
            };
            setState((prevState) => ({ ...prevState, data: productData }));
        } catch (err) {
            console.log("Failed to fetch product data");
        } finally {
            setState((prevState) => ({ ...prevState, loading: false }))
        }
    };

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    return { state };
}

