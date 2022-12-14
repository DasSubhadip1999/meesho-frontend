import Head from "next/head";
import App from "../layout/App";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Meesho - Online Shopping Site for Fashion, Electronics, Home & More |
          Meesho
        </title>
        <meta
          name="description"
          content="This is a clone of shopping web application meesho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  );
}
