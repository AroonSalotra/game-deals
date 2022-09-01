import useGetAPI from "./useGetAPI";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const Featured = ({ redirect, roundNum }) => {
    const [index, setIndex] = useState(0)

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=true&metacritic=90&steamRating=90&onSale=true", 3)
    console.log(data)
    // console.log(data[0].steamAppID)

    // (data ? setIndex(data.length) : null)

    const changeIndex = (e) => {

        if (e.target.id === "prev") {
            (index === 0 ? setIndex(data.length - 1) : setIndex(index - 1))
        } else {
            (index === data.length - 1 ? setIndex(0) : setIndex(index + 1))
        }
    }


    // <img src={data[index].thumb} alt="" className="featured-img" />


    return (
        <>
            {/* <h2 className="title">Hottest Deals</h2> */}
            <div className="featured-container fade">
                {data ?
                    <div className="anim">
                        <a href={`${redirect}${data[index].dealID}`} target={"_blank"} rel="noreferrer">
                            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data[index].steamAppID}/header.jpg?t=1660827879`}
                                alt="" className="featured-img" />
                        </a>
                        <p className="featured-discount">{data[index].salePrice === data[index].normalPrice ? "Full Price" :
                            "-" + roundNum(data[index].savings) + "%"}</p>
                    </div>
                    : null}
                <div className="featured-btns">
                    <IoIosArrowBack id="prev" onClick={(e) => changeIndex(e)} />
                    <IoIosArrowForward id="next" onClick={(e) => changeIndex(e)} />
                </div>
            </div>
        </>
    );
}

export default Featured