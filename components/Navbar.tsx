import { createStyles, Header, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: theme.colors.gray[6],
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Header height={120} p="30px 70px">
      <Text className={classes.text}>nymchat</Text>
    </Header>
  );
};

export default Navbar;
