import React, { useContext } from "react";
import Button from "@site/src/components/adou-button";
import useNotification from "@site/src/hooks/useNotification";

const CustomDuration = () => {
  const notification = useNotification();
  return (
    <div className="d-flex gap-2">
      <Button
        onClick={() =>
          notification?.open({
            title: "短暂通知",
            message: "这条通知将在 1 秒后消失",
            type: "info",
            duration: 1000,
          })
        }
      >
        显示 1s
      </Button>
      <Button
        onClick={() =>
          notification?.open({
            title: "较长通知",
            message: "这条通知将在 5 秒后消失",
            type: "info",
            duration: 5000,
          })
        }
      >
        显示 5s
      </Button>
    </div>
  );
};
export default CustomDuration;
