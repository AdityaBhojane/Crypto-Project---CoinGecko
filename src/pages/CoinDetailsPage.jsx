import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinData } from "../services/fetchCoinData";

function CoinDetailsPage() {

    const { coinId } = useParams();

    const { data, isLoading, isError, error} = useQuery(['coins', page, currency], () => fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return (
        <div>
            <h1>Coin Details Page {coinId}
            </h1>
        </div>
    )
}

export default CoinDetailsPage;