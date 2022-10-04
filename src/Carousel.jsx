import { useEffect } from "react";
import { useState } from "react";
import useGetAPI from "./useGetAPI";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"


const Carousel = (props) => {
    const { redirect } = props;
    const [index, setIndex] = useState(0)
    const [link, setLink] = useState(null)
    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=true&metacritic=70&steamRating=70&onSale=true", 3)

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

    //- 100 ZOMBIE
    // 100 INJUSTICE

    const changeSlide = (e) => {
        //  return index === 0 ? setIndex(-100) : null
        // console.log(e.target.id)
        const target = e.target.id
        switch (index) {
            case 0:
                target === "prev" ? setIndex(100) : setIndex(-100)
                break;
            case 100:
                // setIndex(-100)
                target === "prev" ? setIndex(-100) : setIndex(0)
                break;
            case -100:
                // setIndex(0)
                target === "prev" ? setIndex(0) : setIndex(100)
                break;
            default:
                return undefined;
        }
        // console.log(target)
    }


    return (
        <>
            <div className="carousel-wrapper" >
                <p style={{ color: "white" }} >{index}</p>
                <div className="carousel-content"
                    style={{ transform: `translateX(${index}%)` }}>
                    {data ?
                        data.map(({ thumb, steamAppID, salePrice, savings, dealID, title }) => {
                            return <div>
                                <a href={`${redirect}${dealID}`}
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
                            </div>
                        })
                        : null}
                </div>
            </div>

            <div className="carousel-btns">
                <button onClick={(e) => changeSlide(e)} >
                    <IoIosArrowBack className="btn-icon" id="prev" />
                </button>
                <button onClick={(e) => changeSlide(e)}
                    id="next">
                    <IoIosArrowForward className="btn-icon" />
                </button>
            </div>
        </>
    );
}

export default Carousel;