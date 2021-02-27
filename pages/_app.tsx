import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";

//TODO not working 👇
axios.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  // Important: request interceptors **must** return the request.
  return req;
});

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
