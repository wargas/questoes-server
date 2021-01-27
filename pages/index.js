import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const load = async () => {
      const data = await fetch("/api/total");
      const json = await data.json();

      setTotal(json.total)
    }

    load();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         {total} questoes
        </h1>

      </main>

      
    </div>
  )
}

