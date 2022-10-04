import { AiOutlineNotification } from "react-icons/ai"
import Search from "./Search";

const Header = ({ link, redirect }) => {
    return (
        <header>
            {/* <ul>
                <li>Powered by
                    <span>Cheapshark API</span>
                </li>
                <li>100% Safe</li>
                <li>Up to date</li>
            </ul> */}
            <div>
                {/* <h1>Deal-io</h1>
                <p>Powered by Cheapshark API</p> */}
                <h1>{`{ Deal-io`}</h1>
                <p>{`Powered by Cheapshark API }`}</p>
            </div>
            <Search link={link} redirect={redirect} />
        </header>
    );
}

export default Header;