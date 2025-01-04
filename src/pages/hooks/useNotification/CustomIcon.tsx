import React, { useContext } from "react";
import Button from "@site/src/components/adou-button";
import useNotification from "@site/src/hooks/useNotification";

const CustomIcon = () => {
  const notification = useNotification();
  return (
    <Button
      onClick={() =>
        notification?.open({
          title: "自定义图标",
          message: "这是一条带有自定义图标的通知",
          type: "info",
          customTitleIcon: <i className="fa-solid fa-star text-warning"></i>,
        })
      }
    >
      显示自定义图标通知
    </Button>
  );
};
export default CustomIcon;
