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
    color: theme.colors.gray[6],
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>nymchat</title>
      </Head>
      <Center className={classes.container}>
      <Text className={classes.text}>Nymchat</Text>
      </Center>
    </>
  );
};

export default Home;
