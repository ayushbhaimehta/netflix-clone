import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/login.module.css"

const handleLoginwithEmail = (e) => {
    console.log("login button clicked!");
    e.preventDefault;
}

const login = () => {
    return (
        <div>
            <Head>
                <title>Netflix LogIn</title>
            </Head>
            <header>
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
                <main className={styles.main} >
                    <div className={styles.mainWrapper}>
                        <h1 className={styles.signinHeader} >
                            Sign In
                        </h1>
                        <input
                            type="text"
                            placeholder='Email address'
                            className={styles.emailInput} />
                        <p className={styles.userMsg}></p>
                        <button onClick={handleLoginwithEmail} className={styles.loginBtn} >Sign In </button>
                    </div>
                </main>
            </header>
        </div>
    )
}

export default login