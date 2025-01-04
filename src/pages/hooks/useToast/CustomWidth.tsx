import React from "react";
import useToast from "@site/src/hooks/useToast";
import Button from "@site/src/components/adou-button";

const CustomWidth = () => {
  const toast = useToast();
  return (
    <div className="d-flex gap-2">
      <Button
        onClick={() =>
          toast.open({
            type: "success",
            content: "这是一条较窄的提示",
            width: "200px",
          })
        }
      >
        窄提示
      </Button>
      <Button
        onClick={() =>
          toast.open({
            type: "success",
            content: "这是一条较宽的提示",
            width: "400px",
          })
        }
      >
        宽提示
      </Button>
    </div>
  );
};

export default CustomWidth;
