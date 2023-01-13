import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

export default function notfounded() {
    return <>
        <Head>
            <title>404-Error</title>
            <link rel="icon" href="/404_logo.png" />
        </Head>
        <main className={styles.main}>
            <h1>404 - Page Not Found</h1>
            <p>I guess I won't be getting the Apto+ after all</p>
            <img src = "/404.jpg" className={styles.main} />
        </main>
    </>
}