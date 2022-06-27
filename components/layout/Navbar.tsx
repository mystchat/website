import { createStyles, Header, Text } from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: theme.colors.gray[6],
    cursor: "pointer"
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Header height={120} p="30px 70px">
      <Text className={classes.text} onClick={() => router.push("/")}>
        nymchat
      </Text>
    </Header>
  );
};

export default Navbar;
