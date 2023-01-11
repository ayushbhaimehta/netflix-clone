import { useRouter } from 'next/router';
import React from 'react';
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import cls from "classnames";
import { getYtVideobyID } from "../../lib/videos"

Modal.setAppElement("#__next");

export async function getStaticProps() {
    //data to fetch from API
    // const video = {
    //     title: "Hi Ayush the great",
    //     publishTime: "20-06-2002",
    //     description: "By returning { props: { posts } }, the Blog compo By returning { props: { posts } }, the Blog compo By returning { props: { posts } }, the Blog compoBy returning { props: { posts } }, the Blog compoBy returning { props: { posts } }, the Blog compo",
    //     channelTitle: "Mehta Productions",
    //     viewCount: 100000,
    // };
    const videoId = "QOU-BkOSTjk";
    const videoArray = await getYtVideobyID(videoId);

    return {
        props: {
            video: videoArray.length > 0 ? videoArray[0] : {},
        },
        revalidate: 10, // In seconds
    };
}

export async function getStaticPaths() {
    const listOfVideos = ["SUmPRdUjB7c", "QOU-BkOSTjk", "G6PNPHveIoM"];
    const paths = listOfVideos.map((videoId) => ({
        params: { videoId },
    }));

    return { paths, fallback: "blocking" };
}

const Video = ({ video }) => {
    const router = useRouter();
    console.log({ router });


    const {
        title,
        publishTime,
        description,
        channelTitle,
        statistics: { viewCount } = { viewCount: 0 },
    } = video;
    return (
        <div className={styles.container}>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <iframe
                    className={styles.videoPlayer}
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    frameBorder="0"
                ></iframe>

                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={cls(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={cls(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>View Count: </span>
                                <span className={styles.channelTitle}>{viewCount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Video;