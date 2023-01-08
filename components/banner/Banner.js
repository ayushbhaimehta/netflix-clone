import React from 'react'

const handleOnPlay = () => {
    console.log("handle on play clicked");
}

const Banner = (props) => {
    const { title, subtitle, imgUrl } = props;
    return (
        <div>
            <h3>{title}</h3>
            <h3>{subtitle}</h3>
            <button onClick={handleOnPlay}>Play</button>
            <div style={{
                backgroundImage: `url(${imgUrl})`,
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }} ></div>
        </div>
    )
}

export default Banner