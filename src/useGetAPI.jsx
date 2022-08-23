import { useState, useEffect } from "react";
import axios from "axios";

const useGetAPI = (url, amount) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data.slice(0, amount))
                console.log("api connected")
            })
            .catch(error => {
                console.log(error)
            })
    }, [url])

    return { data };
}

export default useGetAPI;