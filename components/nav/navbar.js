import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image';
import { magic } from "../../lib/magic-client";

const navbar = () => {
    // const { username } = props;
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        async function getUsername() {
            try {
                const { email } = await magic.user.getMetadata();
                const didToken = await magic.user.getIdToken();
                console.log({ didToken });
                setUsername(email);

            } catch (error) {
                console.log("Error retrieving email:", error);
            }
        }
        getUsername();
    }, []);

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
    const handleDropdown = () => {
        console.log("drop down clicked");
        setShowDropdown(!showDropdown)
    }
    const handleLogout = async (e) => {
        console.log("handle log out activated");
        e.preventDefault();

        try {
            await magic.user.logout();
            console.log(await magic.user.isLoggedIn());
            router.push("/login");
        } catch (error) {
            console.error("Error logging out", error);
            router.push("/login");
        }
    }
    console.log({ router });
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/static/netflix.svg"
                            alt="Netflix logo"
                            width="128"
                            height="34"
                        />
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnclickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnclickMylist}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={handleDropdown}>
                            {console.log({ username })}
                            <p className={styles.username}>{username}</p>
                            <Image
                                src="/static/expand_more.svg"
                                alt="Expand more"
                                width="24"
                                height="24"
                            />
                        </button>

                        {showDropdown &&
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link href="/login" legacyBehavior>
                                        <a onClick={handleLogout} className={styles.linkName}>Sign out</a>
                                    </Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default navbar