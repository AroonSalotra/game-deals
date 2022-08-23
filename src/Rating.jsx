import useGetAPI from "./useGetAPI";



const Rating = () => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=90&onSale=true`, 6)
    console.log(data)

    return (
        <>
            <h2>Highest Rated</h2>
            <div className="container-game">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice }) => {
                    return <div>
                        <p>{title}</p>
                        <img src={thumb} className="game-img" alt="" />
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

export default Rating;