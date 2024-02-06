import styles from '@/styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  // The Discord authorization URL
  const url = "https://discord.com/api/oauth2/authorize?client_id=976699048134332496&permissions=8&redirect_uri=https%3A%2F%2Fapi.ezbake.xyz%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20bot";

  return (
    <div>
      <header className={styles.taskbar}>

        <div className={styles.logo}>
          <h1><Link href ="/Discord-Bot/home">Ezbake Bot</Link></h1>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li><Link href="/about" >About</Link></li>
            <li><Link href="/information" >Information</Link></li>
            <li><a href={url} className={styles.button}>Login</a></li>
          </ul>
        </nav>

        <title> Ezbake Bot </title>

      </header> 

      <main className = {styles.centerPieceContainer}>

        <div className = {styles.centerPiece}> 
          {'Play high quality music in \nyour Discord server for free.'}
        </div>

        <div className = {styles.centerPieceSecondary}>
          {'Rocking over 7 million servers.'}
        </div>
        

        <a href={url} className={styles.loginButton}>
          Invite to Server
        </a>


      </main>

    </div>


  );
}
