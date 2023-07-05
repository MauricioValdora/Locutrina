

export const BASE_URL = 'https://64a33fa4b45881cc0ae6415a.mockapi.io';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/Products`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}