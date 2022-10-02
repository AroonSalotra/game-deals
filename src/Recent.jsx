import Loading from "./Loading";
import useGetAPI from "./useGetAPI";

const Recent = ({ redirect }) => {
    const { data } = useGetAPI(`https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=1&sortBy=Release`, 4)
    console.log(data)
    return (
        <>
            <div className="container-game-grid">
                <h2 className="title title-extra-small">Recent Releases</h2>
                {data ? data.map(({ title, metacriticScore, thumb, normalPrice, salePrice, gameID, dealID }) => {
                    return <div key={gameID} className="game-card small">
                        <a href={`${redirect}${dealID}`} target={"_blank"}>
                            <img src={thumb} className="game-img" alt="" />
                        </a>
                    </div>
                })
                    : <Loading/>}
            </div>
        </>
    );
}

export default Recent;