import React from "react";
import Collapse from "@site/src/components/web-elements/adou-collapseX";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <Collapse header={<h1>点击展开</h1>}>
        <p>这是可折叠的内容。</p>
      </Collapse>
    </div>
  );
};

export default Header;
