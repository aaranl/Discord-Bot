import Image from 'next/image'
import styles from './page.module.css'

//onClick ={() => window.open("https://localhost:(Backend port)/auth/discord", "_self")}
//Add this in once the backend is set up
//TODO: Make sure whenever you authorize you send it back the frontend instead of the backend.
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <button>Login</button>


        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
