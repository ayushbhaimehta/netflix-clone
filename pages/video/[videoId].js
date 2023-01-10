import { useRouter } from 'next/router'
import React from 'react'

const Video = () => {
    const router = useRouter();
    console.log({ router });
    const id = router.query.videoId;
    console.log({ id });
    return (
        id
    )
}

export default Video