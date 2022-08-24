import useGetAPI from "./useGetAPI";

const Recent = () => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=1&sortBy=Release`, 6)
    console.log(data)
    return (
        <>
            <h2>Most Recent</h2>
            <div className="container-game-grid">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID }) => {
                    return <div key={gameID} className="game-card">
                        <img src={thumb} className="game-img" alt="" />
                        <p className="game-title">{title}</p>
                        <p className="score">{metacriticScore}</p>
                        <div className="price">
                            <p className="sale-price">${salePrice}</p>
                            <p className="normal-price">${normalPrice}</p>
                        </div>
                    </div>
                })
                    : null}
            </div>
        </>
    );
}

export default Recent;