import { useEffect } from "react";
import { useState } from "react";
import useGetAPI from "./useGetAPI";


const Carousel = (props) => {
    const { redirect } = props;
    const [index, setIndex] = useState(0)
    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=true&onSale=true", 3)

    console.log(data)


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
                        data.map(({ thumb, steamAppID, salePrice, savings, dealID, title }) => {
                            return <a href={`${redirect}${dealID}`}
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`}
                                    className="featured-img"
                                    alt={title} />
                                <p className="featured-discount">
                                    {`-${Math.floor(savings)}%`}
                                </p>
                            </a>
                        })
                        : null}
                </div>
            </div>
        </>
    );
}

export default Carousel;