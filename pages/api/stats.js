import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "../../lib/db/hasura"

export default async function stats(req, res) {
    if (req.method === "POST") {
        console.log({ cookies: req.cookies });

        try {
            const token = req.cookies.token
            if (!token) {
                res.status(403).send({});
            } else {
                const videoId = req.query.videoId;
                const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                console.log({ decodedToken });

                const userId = decodedToken.issuer;
                const findVideoId = await findVideoIdByUser(token, userId, videoId);
                console.log({ findVideoId });                // verify a token symmetric
                // jwt.verify(token, 'shhhhh', function (err, decoded) {
                //     console.log({decoded}) // bar
                // });
                res.send({ msg: "it works", decodedToken, findVideoId });
            }
        } catch (error) {
            console.error("Error occurred /stats", error);
            res.status(500).send({ done: false, error: error?.message });
        }
    }
}