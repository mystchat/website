import { AppShell } from "@mantine/core";
import { FC, ReactNode } from "react";
import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <AppShell header={<Navbar />}>{children}</AppShell>;
};

export default Layout;
