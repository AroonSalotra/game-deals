import { useState } from "react";
import useGetAPI from "./useGetAPI";
import { GrNext, GrFormNext } from "react-icons/gr"


const RatingSteam = () => {

    const [index, setIndex] = useState(0)


    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=20&steamRating=80&pageNumber=${index}`, 5)

    const handlePageIndex = () => {
        (index > 2 ? setIndex(0) : setIndex(index + 1))
    }


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
                            <p className="normal-price">{salePrice === normalPrice ? null : normalPrice}</p>
                            {/* <p>{salePrice === normalPrice ? salePrice}</p> */}
                        </div>
                        <p className="rating">{steamRatingPercent}%</p>
                        {/* </a> */}
                    </div>
                })
                    : null}
                <GrFormNext className="icon-next" onClick={() => handlePageIndex()} />

            </div>
        </div>
    );
}

export default RatingSteam;