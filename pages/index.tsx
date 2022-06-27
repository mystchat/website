import Head from "next/head";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nymchat</title>
      </Head>

      <Layout>hello world</Layout>
    </>
  );
};

export default Home;
