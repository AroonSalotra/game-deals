import { useEffect } from "react";
import { useState } from "react";
import useGetAPI from "./useGetAPI";

const Carousel = (props) => {
    const [index, setIndex] = useState(0)
    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=true&metacritic=70&steamRating=70&onSale=true", 3)

    // console.log(data)

    const { redirect } = props

    // `https://cdn.cloudflare.steamstatic.com/steam/apps/${data[index].steamAppID}/header.jpg?t=1660827879`

    useEffect(() => {
        var nextIndex = 0;
        const threshold = 100;
        const interval = setInterval(() => {
            switch (index) {
                case 0:
                    nextIndex = - threshold
                    break;
                case threshold:
                    nextIndex = 0
                    break;
                default:
                    nextIndex = threshold
            }
            setIndex(nextIndex)
        }, 10000)

        return () => clearInterval(interval)
    }, [index])


    return (
        <>
            <div className="carousel-wrapper" >
                <div className="carousel-content"
                    style={{ transform: `translateX(${index}%)` }}>
                    {data ?
                        data.map(({ thumb, steamAppID, salePrice, savings }) => {
                            return <div>
                                <img
                                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`}
                                    className="featured-img"
                                    alt="" />
                                <p className="featured-discount">
                                    {/* {salePrice === data[index].normalPrice ? "Full Price"
                                        :
                                        "-" + Math.floor(data[index].savings) + "%"} */}
                                    {`-${Math.floor(savings)}%`}
                                </p>
                            </div>
                        })
                        : null}
                </div>
            </div>
        </>
    );
}

export default Carousel;