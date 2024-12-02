import { useState } from "react";
import React from "react";

interface CollapseYProps {
  activeName?: string;
  children?: any;
  according?: boolean;
  canHover?: boolean;
}

const CollapseY = ({
  children,
  according,
  activeName,
  canHover,
}: CollapseYProps) => {
  const [activeKey, setActiveKey] = useState<any>(activeName);

  const handleItemClick = (name: string) => {
    if (according) {
      setActiveKey(name);
    }
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      showContent: activeKey == child.props.name,
      hover: canHover,
      _onItemClick: handleItemClick,
      ...child.props,
    });
  });

  return <div className="cpllapse-y-wrapper">{enhancedChildren}</div>;
};

export default CollapseY;
