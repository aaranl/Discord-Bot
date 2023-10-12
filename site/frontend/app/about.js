import styles from './page.module.css';
import Link from 'next/link';

export default function About() {
  // The Discord authorization URL
  const url = "https://discord.com/api/oauth2/authorize?client_id=976699048134332496&permissions=8&redirect_uri=https%3A%2F%2Fapi.ezbake.xyz%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20bot";

  return (
    <div>
      <header className={styles.taskbar}>

        <div className={styles.logo}>
          <h1><a href ="/">Ezbake Bot</a></h1>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/information"><a>Information</a></Link></li>
            <li><a href={url} className={styles.button}>Login</a></li>
          </ul>
        </nav>

      </header> 

    </div>
  );
}
