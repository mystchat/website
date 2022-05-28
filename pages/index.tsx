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

  // can move navbar line to the right but cant to the left???
  return (
    <>
      <Head>
        <title>nymchat</title>
      </Head>
      <Center className={classes.container}>
        <Navbar height={800} p="xs" width={{ base: 1 }}> 
        </Navbar>
      <Text className={classes.text}>Test</Text>
      </Center>
    </>
  );
};

export default Home;
