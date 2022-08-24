import useGetAPI from "./useGetAPI";
import { Link } from "react-router-dom";



const Rating = ({ redirect }) => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=90&onSale=true`, 6)
    console.log(data)

    return (
        <>
            <h2>Highest Rated</h2>
            <div className="container-game">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID }) => {
                    return <div key={gameID} className="game-card">
                        <a href={`${redirect}${dealID}`} target={"_blank"}>
                            <img src={thumb} className="game-img" alt="" />
                            <p className="game-title">{title}</p>
                            <p className="score">{metacriticScore}</p>
                            <div className="price">
                                <p className="sale-price">${salePrice}</p>
                                <p className="normal-price">${normalPrice}</p>
                            </div>
                        </a>
                    </div>

                })
                    : null}
            </div>
        </>
    );
}

export default Rating;