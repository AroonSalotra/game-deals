import useGetAPI from "./useGetAPI";

const Recent = ({ redirect }) => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=1&sortBy=Release`, 4)
    console.log(data)
    return (
        <>
            {/* <h2>Recent Releases</h2> */}
            <div className="container-game-grid">
                <h2 className="flex-fit">Recent Releases</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID }) => {
                    return <div key={gameID} className="game-card small">
                        <a href={`${redirect}${dealID}`} target={"_blank"}>
                            <img src={thumb} className="game-img" alt="" />
                            {/* <p className="game-title">{title}</p> */}
                            {/* <p className="score">{metacriticScore}</p> */}
                            <div className="price">
                                {/* <p className="sale-price">${salePrice}</p> */}
                                {/* <p className="sale-price">${normalPrice}</p> */}
                            </div>
                        </a>
                    </div>
                })
                    : null}
            </div>
        </>
    );
}

export default Recent;