import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          <Link href="https://ezbake.xyz/auth/discord">Login</Link>
        </p>
      </div>

    </main>
  )
}
