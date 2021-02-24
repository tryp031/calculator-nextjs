import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>

        <div className={styles.grid}>
          <a href="https://github.com/tryp031/calculator-nextjs#readme" target="_blank" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Check and create you own calculator.</p>
          </a>

          <a href="/calculator" className={styles.card}>
            <h3>Calculator &rarr;</h3>
            <p>Check our Demo.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>by Dmazo</footer>
    </div>
  );
}
