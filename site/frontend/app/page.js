import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'

//TODO: Make a real frontend website that isnt just a button


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          <a href="https://api.ezbake.xyz/auth/discord">Login</a>
        </p>
      </div>

    </main>
  )
}
