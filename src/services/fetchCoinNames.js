// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc

import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinNames() {
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=usd&order=market_cap_desc
`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}