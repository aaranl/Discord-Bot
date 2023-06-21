import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          <a href="http://142.93.54.80/auth/discord">Login</a>
        </p>
      </div>

    </main>
  )
}
