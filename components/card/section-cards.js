import React from 'react';
import styles from "./section-cards.module.css";
import Card from "./card";
import Link from 'next/link';

const SectionCards = (props) => {
    const { title, videos = [], size } = props;
    // console.log({ videos });
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return (
                        <Link href={`/video/${video.id}`}>
                            <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionCards 