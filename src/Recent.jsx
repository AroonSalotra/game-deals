import Loading from "./Loading";
import useGetAPI from "./useGetAPI";

const Recent = ({ redirect }) => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=1&sortBy=Release`, 4)
    // console.log(data)
    return (
        <>
            <div className="container-col-small">
                <h2 className="title title-small"
                    style={{ height: "2rem" }}>Upcoming</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID }) => {
                    return <div key={gameID} className="game-card">
                        <a href={`${redirect}${dealID}`} target={"_blank"}>
                            <img src={thumb} className="game-img" alt="" />
                        </a>
                    </div>
                })
                    : <Loading />}
            </div>
        </>
    );
}

export default Recent;