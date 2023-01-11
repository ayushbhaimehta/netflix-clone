import { magicAdmin } from "../../lib/magic"

const login = async (req, res) => {
    if (req.method === "POST") {
        try {
            const auth = req.headers.authorization;
            const DIDToken = auth ? auth.substr(7) : "";
            const metadata = await magicAdmin.users.getMetadataByToken(DIDToken);
            // Get a token however you wish! Perhaps this is attached
            // to `req.authorization`
            // const DIDToken = // ...

            // Retrieves user information by DID token
            console.log({ auth }, { DIDToken }, { metadata });
            res.send({ done: true })
        } catch (error) {
            console.error("something is wrong");
            res.status(500).send({ done: "falsesssss" })
        }
    }
    else {
        res.send({ done: false })
    }
}

export default login
// "WyIweDM3NzZjYjhiZDM3ODMwNjQxYzNiZTljZTJiYzk2MzRhNGRhYmI4ZjA3NmU5ZGM0MjdkMTMyZThiMWM4N2U1N2E2NTAxOGYzZmUyZWJkMDAwZTZjMmFhMTA5ZTk1MjZlODc1NDU4YWI1YWRmNjdlMWE4MDE3NWU2MDNiZTg5MzRkMWIiLCJ7XCJpYXRcIjoxNjczNDY3MTQxLFwiZXh0XCI6MTY3MzQ2ODA0MSxcImlzc1wiOlwiZGlkOmV0aHI6MHhDMjA3NThEQzhmNjhFNkRmZGRjMzZGMWQwMjc1NDcyMkM3RkRFNzQxXCIsXCJzdWJcIjpcIl9RVkhwanJ6NHdDYzRPbE9tY2hTRXV4VXo0cFZqYklIdkkwY2pkYTNOdkE9XCIsXCJhdWRcIjpcIjBfZGNkdlFTWk9weFlYR0pPaFhZTzl3WVpJN0EwRnZHSHhyLVBKS3ZhdUE9XCIsXCJuYmZcIjoxNjczNDY3MTQxLFwidGlkXCI6XCIzMmUzMTQwMi1iZjRkLTQ5ODMtOWJhZC1lZDU3Mjc2ZjY1OGNcIixcImFkZFwiOlwiMHhlNGVhZmMwZmVmZGM0YWVjZTBiMzg2NzAxZjVhMDQ3MzFkMWE2MWQzYTE5MzM3NWRmMmE1MWJiYjY5ZDEyY2UzNjdmYzFjZDUzMTA5NWQ4NjA4ZTBmMDYwYTNmNDU5M2NjYjYxZjY3Y2E0N2U5ZmVlZGE1OGJhYjRmZDUzNDk2NDFiXCJ9Il0="