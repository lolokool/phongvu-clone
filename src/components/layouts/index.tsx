import { ReactNode } from "react";
import HeaderComponent from "../header";
import FooterComponent from "../footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default Layout;
