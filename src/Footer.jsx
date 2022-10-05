const Footer = () => {
    const listOne = [
        { text: "My Github", redrect: "#" },
        { text: "Cheapshark API", redrect: "#" },
        { text: "My Website", redrect: "#" },
    ]
    return (
        <footer className="footer">
            {/* <p>This website is free and non-profit made using <a href="">Cheapshark API</a> & React Icons</p> */}
            <ul>
                {listOne.map(({ text, redirect }) => {
                    return <a href={redirect} target={"_blank"} rel="noreferrer">
                        <li>{text}</li>
                    </a>
                })}
            </ul>
        </footer>
    );
}

export default Footer;