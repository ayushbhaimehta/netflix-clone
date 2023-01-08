import React from 'react'
import Image from "next/image";
import styles from "./card.module.css";

const card = (props) => {
    const { imgUrl, size } = props;
    return (
        <div>
            Card
            <Image src={imgUrl} alt="image" width="300" height="300" />
        </div>
    );
}

export default card