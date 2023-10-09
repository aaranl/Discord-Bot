import styles from './page.module.css';

export default function Home() {
  // The Discord authorization URL
  const url = "https://discord.com/api/oauth2/authorize?client_id=976699048134332496&permissions=8&redirect_uri=https%3A%2F%2Fapi.ezbake.xyz%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20bot";

  return (
    <header className={styles.taskbar}>
      <div className={styles.logo}>
        <h1>Ezbake Bot</h1>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/documentation">About</a></li>
          <li><a href="/information">Information</a></li>
        </ul>
      </nav>

      <div className={styles.login}>
        <a href={url} className={styles.button}>
          Login
        </a>
      </div>
    </header>
  );
}
