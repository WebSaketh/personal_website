import React, { ReactNode } from "react";
import Navbar from "../components/navbar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen font-main">
      <Navbar></Navbar>
      <main className=" overflow-auto w-full h-full bg-gray-200">
        {children}
      </main>
    </div>
  );
};

export default Layout;
