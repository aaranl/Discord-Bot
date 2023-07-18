import styles from './page.module.css';

export default function Home() {

  // The Discord authorization URL
  const url = "https://discord.com/api/oauth2/authorize?client_id=976699048134332496&permissions=8&redirect_uri=https%3A%2F%2Fapi.ezbake.xyz%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20bot";


  //Very basic code need to work on this overall to display for numurous things.
  //Features
  //Documentation of the commands
  //Information about the permissions the bot is given, and the information the bot can attain from the server for the user.
  //TOS
  //Make it look nice, look nice, feel nice
  //Look up some guide for CSS i really dont understand how it apply it properly.
  
  return (
    <header className={styles.taskbar}>
      <div className={styles.logo}>
        <h1>Ezbake Bot</h1>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
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



//TODO: Make a real frontend website that isnt just a button

//https://api.ezbake.xyz/auth/discord


// export default function Home() {
//   return (
//     <main className={styles.main}>

//       <div className={styles.description}>
//         <p>
          
//           <a href="https://api.ezbake.xyz/oauth/redirect">Login</a>
          
//         </p>
//       </div>

//     </main>
//   )
// }
