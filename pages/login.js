import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/login.module.css"
import { useRouter } from 'next/router'
import { magic } from "../lib/magic-client";


const login = () => {
    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleEmailchange = (e) => {
        console.log("email changed bro");
        // console.log({ e });
        setUserMsg("");
        const Email = e.target.value;
        setEmail(Email);
    }
    const handleLoginwithEmail = async (e) => {
        console.log("login button clicked!");
        e.preventDefault;
        // setUserMsg("enter a Valid email")

        if (email !== "ayushbhaimehta20002@gmail.com") {
            setIsLoading(false)
            setUserMsg("enter a Valid email")
        } else {
            // main page open karna hai 
            console.log("route to main page");
            try {
                setIsLoading(true);
                const didToken = await magic.auth.loginWithMagicLink({
                    email,
                });
                console.log({ didToken });
                if (didToken) {
                    setIsLoading(false)
                    router.push("/")
                }
            } catch (error) {
                // Handle errors if required!
                console.error("Something went wrong logging in", error);
            }
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix LogIn</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/">
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/static/netflix.svg"
                                alt="Netflix logo"
                                width="128"
                                height="34"
                            />
                        </div>
                    </Link>
                </div>
            </header>

            <main className={styles.main} >
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader} >
                        Sign In
                    </h1>
                    <input
                        type="text"
                        placeholder='Email address'
                        onChange={handleEmailchange}
                        className={styles.emailInput} />
                    {console.log({ userMsg })}
                    <p className={styles.userMsg}>{userMsg}</p>
                    <button onClick={handleLoginwithEmail} className={styles.loginBtn} >{isLoading ? "Loading..." : "Sign In"}</button>
                </div>
            </main>
        </div>
    )
}

export default login