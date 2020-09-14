import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../styles/globals.ainsley')
      .then((x) => {
        console.log("x", x);
      });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
