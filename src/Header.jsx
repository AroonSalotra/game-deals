import { AiOutlineNotification } from "react-icons/ai"
import Search from "./Search";

const Header = ({ link, redirect }) => {
    return (
        <header>
            <div className="page-title">
                <h1>{`{ Deal-io`}</h1>
                <p>{`Powered by Cheapshark API }`}</p>
            </div>
            <Search link={link} redirect={redirect} />
        </header>
    );
}

export default Header;