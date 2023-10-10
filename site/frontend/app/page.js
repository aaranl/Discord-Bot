import styles from './page.module.css';

export default function Home() {
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
            <li><a href="/documentation">About</a></li>
            <li><a href="/information">Information</a></li>
            <li><a href={url} className={styles.button} >Login</a></li>
          </ul>
        </nav>

      </header> 

      <main className = {styles.centerPieceContainer}>
        <div className = {styles.centerPiece}> 
          {'Play high quality music in your Discord server for free.'}
        </div>
      </main>

    </div>


  );
}
