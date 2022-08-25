import useGetAPI from "./useGetAPI";
import { useEffect, useState, useRef } from "react"
import axios from "axios"

const Search = ({ link, redirect }) => {

    const [search, setSearch] = useState("")
    const [amount, setAmount] = useState(5)
    const [display, setDisplay] = useState("hide")

    const ref = useRef(null)

    const [url, setUrl] = useState(`${link}?storeID=1&onSale=true&upperPrice=20&metacritic=80`)
    const { data } = useGetAPI(url, amount)



    const handleClick = () => {
        setDisplay("show")
    }

    const handleChange = (e) => {
        if (e.target.value.length > 1) {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${search}&metacritic=1`)
            setAmount()
        } else {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=true&upperPrice=20&metacritic=80`)
            setAmount(5)
        }
        setSearch(e.target.value)
    }

    useEffect(() => {
        const target = ref.current;

        const handleEvent = (event) => {

            if (event.target.id !== "search") {
                setDisplay("hide")
            }
        }
        window.addEventListener('click', handleEvent);
        return () => {
            target.removeEventListener('click', handleEvent);
        };

    }, [])


    return (
        <>
            <div className="container-search">
                <label onClick={() => handleClick()} className="input-search">
                <p className="search-title">Search</p>
                    <input ref={ref} id="search" autoFocus autoComplete="off"
                        type="text" value={search} onChange={(e) => handleChange(e)} />
                </label>
            </div>

            <div className={`${display} search-content`}>
                {data !== null && typeof (data) !== "string" ? data.map(({ title, metacriticScore, thumb, gameID, dealID, isOnSale, normalPrice, salePrice }) => {
                    return <div key={gameID} className="">
                        <a href={`${redirect}${dealID}`} target="_blank">
                            <img src={thumb} className="game-img" alt="" />
                            {/* <p className="score">{metacriticScore}</p> */}
                            {/* {isOnSale === "0" ? <p>{normalPrice}</p> :} */}
                            <p>${isOnSale === "0" ? normalPrice : salePrice }</p>
                        </a>
                    </div>
                })
                    : null}
            </div>

        </>
    );
}

export default Search;

