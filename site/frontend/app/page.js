import styles from './page.module.css';

export default function Home() {

  // The Discord authorization URL
  const url = "https://discord.com/api/oauth2/authorize?client_id=976699048134332496&permissions=8&redirect_uri=https%3A%2F%2Fapi.ezbake.xyz%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20bot";

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
