import React, { useContext } from "react";
import Button from "@site/src/components/adou-button";
import useNotification from "@site/src/hooks/useNotification";

const Basic = () => {
  const notification = useNotification();
  const showNotification = (type) => {
    notification?.open({
      title: type.charAt(0).toUpperCase() + type.slice(1),
      message: ` 这是一条${type}通知`,
      type: type,
    });
  };
  return (
    <div className="d-flex gap-2">
      <Button onClick={() => showNotification("success")}>成功通知</Button>
      <Button onClick={() => showNotification("warning")}>警告通知</Button>
      <Button onClick={() => showNotification("info")}>信息通知</Button>
      <Button onClick={() => showNotification("danger")}>错误通知</Button>
    </div>
  );
};
export default Basic;
