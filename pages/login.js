import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/login.module.css"

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
            </header>
        </div>
    )
}

export default login