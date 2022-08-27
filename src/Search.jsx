import useGetAPI from "./useGetAPI";
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { MdCancel } from "react-icons/md"

const Search = ({ link, redirect }) => {

    const [search, setSearch] = useState("")
    const [amount, setAmount] = useState(5)
    const [display, setDisplay] = useState("hide")
    const [cancel, setCancel] = useState("hide")

    const ref = useRef(null)

    // const [url, setUrl] = useState(`${link}?storeID=1&onSale=true&upperPrice=20&metacritic=80`)
    const [url, setUrl] = useState(``)
    const { data } = useGetAPI(url, amount)



    const handleClick = () => {
        setDisplay("show")
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 1) {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${search}&metacritic=1`)
            setAmount()
            setCancel("")
            setDisplay("")
        } else {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=true&upperPrice=20&metacritic=80`)
            setAmount(5)
            setDisplay("hide")
            setCancel("hide")
        }
    }

    const clearSearch = () => {
        setSearch("")
        setCancel("hide")
        setDisplay("hide")
        setUrl("")
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
                {/* <p>{search.length}</p> */}
                <p className="title title-small">Search</p>
                <label onClick={() => handleClick()} className="input-search">
                    <input ref={ref} id="search" autoComplete="off" autoFocus
                        type="text" value={search} onChange={(e) => handleChange(e)} />
                    <MdCancel onClick={() => clearSearch()}
                        className={`search-btn ${cancel}`} />
                </label>
            </div>

            <div className={`${display} search-content`}>
                {data !== null && typeof (data) !== "string" ? data.map(({ title, metacriticScore, thumb, gameID, dealID, isOnSale, normalPrice, salePrice, steamAppID }) => {
                    return <div key={gameID} className="search-result">
                        <a href={`${redirect}${dealID}`} target="_blank" rel="noreferrer">
                            <img src={thumb} className="search-img" alt="" />
                            {/* <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg?t=1660827879`} className="game-img" alt={title} /> */}
                            {/* <p className="score">{metacriticScore}</p> */}
                            {/* {isOnSale === "0" ? <p>{normalPrice}</p> :} */}
                            <p className="sale-price search-price">${isOnSale === "0" ? normalPrice : salePrice}</p>
                        </a>
                    </div>
                })
                    : null}
            </div>

        </>
    );
}

export default Search;

