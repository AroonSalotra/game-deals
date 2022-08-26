import useGetAPI from "./useGetAPI";

const RatingSteam = () => {

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=20&steamRating=80", 4)



    return (
        <div>
            <div className="container-row bg">
                <h2 className="title title-small">Community Rating</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID, savings, steamAppID, steamRatingPercent }) => {
                    return <div key={gameID} className="game-card ">
                        {/* <a href={`${redirect}${dealID}`} target={"_blank"} rel="noreferrer"> */}
                        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`}
                            className="game-img" alt={title} />
                        <div className="price">
                            <p className="sale-price">${salePrice}</p>
                            <p className="normal-price">${normalPrice}</p>
                        </div>
                        <p className="rating">{steamRatingPercent}%</p>
                        {/* </a> */}
                    </div>
                })
                    : null}
            </div>
        </div>
    );
}

export default RatingSteam;