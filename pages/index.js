import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/home_logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/home_logo.png" className={styles.icon} />
        <h2>Home</h2>
        <h3>Choose where to go</h3>
        <img src="/dog.png" className={styles.icon} />
        <h4><Link href="/pet"> Pet name generator </Link></h4>
        <br></br>
        <img src="/image_logo.png" className={styles.icon} />
        <h4><Link href="/image">Image Generator</Link></h4>
        <br></br>
        <h4><img src="/aplus_logo.png" className={styles.icon} /></h4>
        <Link href="/404">Apto+ in this project</Link>
      </main>
    </div>
  )
}

export default Home