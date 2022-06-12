import Head from "next/head";
import type { NextPage } from "next";
import { Center, createStyles, Text, Navbar } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    height: "100vh",
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    fontStyle: "normal",
    color: theme.colors.gray[6],
    
    marginTop: 20,
    //marginRight: 20,
    marginBottom: 20,
    marginLeft: 100,
    
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>nymchat</title>
      </Head>
      <Text className={classes.text}>nymchat</Text>
      <hr color="#2C2E33"></hr>
    </>
  );
};

export default Home;
