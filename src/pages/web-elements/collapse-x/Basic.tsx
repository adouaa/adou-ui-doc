import React from "react";
import Collapse from "@site/src/components/web-elements/adou-collapseX";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <Collapse></Collapse>
    </div>
  );
};

export default Header;
