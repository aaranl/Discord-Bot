import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          <Link href="142.93.54.80/auth/discord">Login</Link>
        </p>
      </div>

    </main>
  )
}
