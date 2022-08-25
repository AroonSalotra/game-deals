import useGetAPI from "./useGetAPI";
import { Link } from "react-router-dom";



const Rating = ({ redirect, roundNum }) => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=90`, 6)
    console.log(data)

    // const roundNum = (target) => {
    //   return Number(target).toFixed(0)
    // }


    return (
        <>
            <h2 className="title">Highest Rated</h2>
            <div className="container-game">
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID, savings }) => {
                    return <div key={gameID} className="game-card medium">
                        <a href={`${redirect}${dealID}`} target={"_blank"} rel="noreferrer">
                            <img src={thumb} className="game-img" alt={title} />
                            <p className="game-title">{title}</p>
                            <p className="score">{metacriticScore}</p>
                            <ul className="price">
                                <li className="sale-price">{salePrice}</li>
                                <li className="normal-price">{normalPrice}</li>
                                {/* <li className="score">{metacriticScore}</li> */}
                            </ul>
                            <p className="discount">{roundNum(savings) > 0 ? roundNum(savings) + "%" : null}</p>
                        </a>
                    </div>

                })
                    : null}
            </div>
        </>
    );
}

export default Rating;