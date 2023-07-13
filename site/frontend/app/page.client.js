import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      // Send the code to your backend
      fetch(`https://api.ezbake.xyz/oauth/redirect?code=${router.query.code}`)
        .then(response => {
          if (response.ok) {
            console.log('Authorization successful');
          } else {
            console.error('Authorization failed');
          }
        });
    }
  }, [router.query.code]);

  const handleLogin = () => {
    // The redirect URI registered with Discord
    const redirectUri = encodeURIComponent('https://ezbake.xyz/callback');

    // The client ID of your Discord application
    const clientId = 976699048134332496;

    // Requesting bot scope with permissions
    const permissions = 8;

    // The Discord authorization URL
    const url = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20bot&permissions=${permissions}`;

    // Redirect to Discord's authorization page
    window.location.href = url;
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </main>
  );
}


// import styles from './page.module.css'

// //TODO: Make a real frontend website that isnt just a button

// //https://api.ezbake.xyz/auth/discord


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
