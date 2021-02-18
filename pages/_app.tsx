import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return pathname !== "/auth" ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component />
  );
}

export default MyApp;
