import useGetAPI from "./useGetAPI";
import { useEffect, useState, useRef } from "react"
import axios from "axios"

const Search = ({ link }) => {

    const [search, setSearch] = useState("")
    const [amount, setAmount] = useState(5)
    const [display, setDisplay] = useState("hide")
    const [url, setUrl] = useState(`${link}?storeID=1&onSale=true&upperPrice=20&metacritic=80`)

    const ref = useRef(null)

    const { data } = useGetAPI(url, amount)
    console.log(data)

    const handleClick = () => {
        setDisplay("show")
    }

    const handleChange = (e) => {
        if (e.target.value.length > 1) {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${search}`)
            setAmount()
        } else {
            setUrl(`https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=true&upperPrice=20&metacritic=80`)
            setAmount(5)
        }
        setSearch(e.target.value)

        console.log(e.target.value.length)
    }

    useEffect(() => {
        const target = ref.current;

        const handleEvent = (event) => {
            console.log(event.target.id)

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
                <label onClick={() => handleClick()}>
                    <input ref={ref} id="search" autoFocus type="text" value={search} onChange={(e) => handleChange(e)} />
                </label>
                <p>{search}</p>
            </div>

            <div className={display}>
                {data ? data.map(({ title, metacriticScore, thumb, gameID }) => {
                    return <div key={gameID}>
                        {/* <p>{title}</p> */}
                        <img src={thumb} className="game-img" alt="" />
                        <p className="score">{metacriticScore}</p>
                    </div>
                })
                    : null}
            </div>
        </>
    );
}

export default Search;

