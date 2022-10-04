const Background = () => {
    const url = "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    return (
        <div className="bg-main">
            <img src={url} alt="" />
        </div>
    );
}

export default Background