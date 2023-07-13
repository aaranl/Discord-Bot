import styles from './page.module.css';

export default function Home() {
  // The redirect URI registered with Discord
  const redirectUri = encodeURIComponent('https://ezbake.xyz/callback');

  // The client ID of your Discord application
  const clientId = 976699048134332496;

  // Requesting bot scope with permissions
  const permissions = 8;

  // The Discord authorization URL
  const url = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20bot&permissions=${permissions}`;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href={url} className={styles.button}>Login</a>
      </div>
    </main>
  );
}



//TODO: Make a real frontend website that isnt just a button

//https://api.ezbake.xyz/auth/discord


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          
          <a href="https://api.ezbake.xyz/oauth/redirect">Login</a>
          
        </p>
      </div>

    </main>
  )
}
