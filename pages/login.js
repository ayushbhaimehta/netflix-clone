import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/login.module.css"
import { useRouter } from 'next/router'



const login = () => {
    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");
    const router = useRouter();

    const handleEmailchange = (e) => {
        console.log("email changed bro");
        // console.log({ e });
        setUserMsg("");
        const Email = e.target.value;
        setEmail(Email);
    }
    const handleLoginwithEmail = (e) => {
        console.log("login button clicked!");
        e.preventDefault;
        // setUserMsg("enter a Valid email")

        if (email !== "abcd@1.com") {
            setUserMsg("enter a Valid email")
        } else {
            // main page open karna hai 
            console.log("route to main page");
            router.push("/")
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
                    <button onClick={handleLoginwithEmail} className={styles.loginBtn} >Sign In </button>
                </div>
            </main>
        </div>
    )
}

export default login