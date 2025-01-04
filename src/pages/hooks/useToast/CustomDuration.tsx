import React from "react";
import useToast from "@site/src/hooks/useToast";
import Button from "@site/src/components/adou-button";

const CustomDuration = () => {
  const toast = useToast();
  return (
    <div className="d-flex gap-2">
      <Button
        onClick={() =>
          toast.open({
            type: "success",
            content: "这条提示将在 1 秒后消失",
            duration: 1000,
          })
        }
      >
        显示 1s
      </Button>
      <Button
        onClick={() =>
          toast.open({
            type: "success",
            content: "这条提示将在 5 秒后消失",
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
