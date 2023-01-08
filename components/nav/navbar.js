import { useRouter } from 'next/router';
import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'


const navbar = (props) => {
    const { username } = props;
    const router = useRouter();
    const handleOnclickHome = (e) => {
        console.log("home clicked");
        e.preventDefault()
        router.push("/")
    }

    const handleOnclickMylist = (e) => {
        console.log("My list clicked");
        e.preventDefault()
        router.push("/brouse/my-list")
    }
    console.log({ router });
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink}>
                    <div className={styles.logoWrapper}>Netflix</div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnclickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnclickMylist}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn}>
                            <p className={styles.username}>{username}</p>
                        </button>

                        <div className={styles.navDropdown}>
                            <div>
                                <Link href="/login" legacyBehavior>
                                    <a className={styles.linkName}>Sign out</a>
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default navbar