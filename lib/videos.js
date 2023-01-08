import videoData from "../data/videos.json";


export const getVideos = async () => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    // GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Avengers%20trailers&key=[YOUR_API_KEY] HTTP/1.1
    // Authorization: Bearer[YOUR_ACCESS_TOKEN]
    // Accept: application / json

    // Authorization: Bearer[YOUR_ACCESS_TOKEN]
    // Accept: application / json

    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Avengers&key=${YOUTUBE_API_KEY}`);
    const data = await res.json();
    console.log({ data });

    return data?.items.map(item => {
        return {
            title: item.snippet.title,
            imgUrl: item?.snippet?.thumbnails?.high?.url,
            id: item?.id?.videoId,
        }
    })
};
