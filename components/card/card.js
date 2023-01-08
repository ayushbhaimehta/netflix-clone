import React from 'react'
import Image from "next/image";
import styles from "./card.module.css";

const card = (props) => {
    const { imgUrl, size } = props;
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };
    return (
        <div className={styles.container}>
            Card
            <div className={classMap[size]}>
                <Image
                    src={imgUrl}
                    alt="image"
                    fill
                    className={styles.cardImg}
                />
            </div>
        </div>
    );
}

export default card