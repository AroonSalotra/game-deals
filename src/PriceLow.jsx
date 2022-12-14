import Break from "./Break";
import Loading from "./Loading";
import useGetAPI from "./useGetAPI";

const PriceLow = ({ redirect, roundNum }) => {

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&metacritic=1", 12)
    return (
        <>
            <Break />
            <h2 className="title align">Bargains (under $10)</h2>
            <div className="container-game">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID, savings, steamAppID }) => {
                    return <div key={gameID} className="game-card medium">
                        <a href={`${redirect}${dealID}`} target={"_blank"} rel="noreferrer">
                            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`} className="game-img" alt={title} />
                            <div className="price">
                                <p className="sale-price">${salePrice}</p>
                                <p className="normal-price">${normalPrice}</p>
                            </div>
                            <p className="discount">-{roundNum(savings) > 0 ? roundNum(savings) + "%" : null}</p>
                        </a>
                    </div>

                })
                    : <Loading />}
            </div>
        </>
    );
}

export default PriceLow;