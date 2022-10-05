const Footer = () => {
    const listOne = [
        { text: "My Github", redirect: "https://github.com/AroonSalotra" },
        { text: "Cheapshark API", redirect: "https://apidocs.cheapshark.com/" },
        { text: "My Website", redirect: "https://aroonsalotra.github.io/portfolio-website/" },
    ]
    return (
        <footer className="footer">
            {listOne.map(({ text, redirect }) => {
                return <a href={redirect} target="_blank" rel="noreferrer">
                    <p>{text}</p>
                </a>
            })}
        </footer>
    );
}

export default Footer;