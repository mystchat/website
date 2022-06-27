import Head from "next/head";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nymchat</title>
      </Head>

      <Layout>
        <h1>Home</h1>
      </Layout>
    </>
  );
};

export default Home;
