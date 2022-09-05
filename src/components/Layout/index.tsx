import { ReactNode } from "react";
import Content from "../Content";
import Header from "../Header/Header";

interface IlayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: IlayoutProps) => (
  <div>
    <Header />
    <Content>{children}</Content>
  </div>
);

export default Layout;
