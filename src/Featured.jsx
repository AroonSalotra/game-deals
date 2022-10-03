import useGetAPI from "./useGetAPI";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import Loading from "./Loading";
import Carousel from "./Carousel";

const Featured = ({ redirect }) => {
    const [index, setIndex] = useState(0)

    const { data } = useGetAPI("https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=true&metacritic=90&steamRating=90&onSale=true", 3)
    // console.log(data)

    const changeIndex = (e) => {

        if (e.target.id === "prev") {
            (index === 0 ? setIndex(data.length - 1) : setIndex(index - 1))
        } else {
            (index === data.length - 1 ? setIndex(0) : setIndex(index + 1))
        }
    }

    return (
        <>
            <div className="featured-container">
                <Carousel redirect={redirect} />
            </div>
        </>
    );
}

export default Featured