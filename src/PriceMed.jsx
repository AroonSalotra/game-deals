import useGetAPI from "./useGetAPI";
import { useState } from "react";
import { GrNext, GrFormNext } from "react-icons/gr"

const PriceMed = () => {

    const [index, setIndex] = useState(0)

    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=15&metacritic=1&pageNumber=${index}`, 5)

    const handlePageIndex = () => {
        (index > 2 ? setIndex(0) : setIndex(index + 1))
    }

    return (
        <>
            <div className="container-row bg">
                <h2 className="title title-small">Games under $30</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID, savings, steamAppID }) => {
                    return <div key={gameID} className="game-card">
                        {/* <a href={`${redirect}${dealID}`} target={"_blank"} rel="noreferrer"> */}
                        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`}
                            className="game-img" alt={title} />
                        <div className="price">
                            <p className="sale-price">${salePrice}</p>
                            {/* <p className="normal-price">${normalPrice}</p> */}
                            <p className="normal-price">{salePrice === normalPrice ? null : normalPrice}</p>

                        </div>

                        {/* </a> */}

                    </div>
                })
                    : null}

                <GrFormNext className="icon-next" onClick={() => handlePageIndex()} />
            </div>
        </>
    );
}

export default PriceMed;