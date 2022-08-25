import useGetAPI from "./useGetAPI";

const PriceMed = () => {

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=20&metacritic=1", 4)

    return (
        <>
            <div className="container-row">
                <h2 className="title">Under $30</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID, savings, steamAppID }) => {
                    return <div key={gameID} className="game-card">
                        {/* <a href={`${redirect}${dealID}`} target={"_blank"} rel="noreferrer"> */}
                        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`}
                            className="game-img" alt={title} />
                        <div className="price">
                            <p className="sale-price">${salePrice}</p>
                            <p className="normal-price">${normalPrice}</p>
                        </div>
                        {/* </a> */}
                    </div>
                })
                    : null}
            </div>
        </>
    );
}

export default PriceMed;