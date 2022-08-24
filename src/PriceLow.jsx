import useGetAPI from "./useGetAPI";

const PriceLow = () => {

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&metacritic=1", 12)
    return (
        <>
            <h2 className="title">Bargains (under $5)</h2>
            <div className="container-game">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID }) => {
                    return <div key={gameID} className="game-card medium">
                        {/* <a href={`${redirect}${dealID}`} target={"_blank"}> */}
                        <img src={thumb} className="game-img" alt="" />
                        <p className="game-title">{title}</p>
                        <p className="score">{metacriticScore}</p>
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

export default PriceLow;