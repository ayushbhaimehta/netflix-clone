import jwt from "jsonwebtoken";

export default async function stats(req, resp) {
    if (req.method === "POST") {
        console.log({ cookies: req.cookies });

        try {
            const token = req.cookies.token
            if (!token) {
                resp.status(403).send({});
            } else {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log({ decoded }) // bar

                // verify a token symmetric
                // jwt.verify(token, 'shhhhh', function (err, decoded) {
                //     console.log({decoded}) // bar
                // });
                resp.send({ msg: "it works" });
            }
        } catch (error) {
            console.error("Error occurred /stats", error);
            resp.status(500).send({ done: false, error: error?.message });
        }
    }
}