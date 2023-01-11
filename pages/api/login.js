
const login = async (req, res) => {
    if (req.method === "POST") {
        try {
            const auth = req.headers.authorization;
            const token = auth ? auth.substr(7) : "";
            console.log({ auth }, { token });
            res.send({ done: true })
        } catch (error) {
            console.error("something is wrong");
            res.status(500).send({ done: falseee })
        }
    }
    else {
        res.send({ done: false })
    }
}

export default login