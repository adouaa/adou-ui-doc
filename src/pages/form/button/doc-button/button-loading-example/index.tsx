import React from "react";
import "./index.scss";
import Card from "@site/src/components/adou-card";
import Button from "../../../../../components/adou-button";

const ButtonLoadingExample = () => {
  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);
  const [isLoading3, setIsLoading3] = React.useState(false);
  const [isLoading4, setIsLoading4] = React.useState(false);

  const handleClick1 = () => {
    setIsLoading1(true);
    setTimeout(() => {
      setIsLoading1(false);
    }, 3000);
  };

  const handleClick2 = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
    }, 1000);
  };

  const handleClick3 = () => {
    setIsLoading3(true);
    setTimeout(() => {
      setIsLoading3(false);
    }, 1000);
  };

  const handleClick4 = () => {
    setIsLoading4(true);
    setTimeout(() => {
      setIsLoading4(false);
    }, 2000);
  };

  return (
    <div className="button-loading-example mt-2">
      <Card>
        <div className="default-btns">
          <Button
            externalClassName="me-2"
            size="lg"
            loading={isLoading1}
            type="primary"
            onClickOK={handleClick1}
          >
            Loading Button1
          </Button>
          <Button
            spinerColor="danger"
            loading={isLoading2}
            type="warning"
            onClickOK={handleClick2}
          >
            Loading Button2
          </Button>
        </div>
        <div className="plain-btns my-2">
          <Button
            externalClassName="me-2"
            spinerType="grow"
            size="lg"
            loading={isLoading3}
            outlineColor="success"
            onClickOK={handleClick3}
          >
            Loading Button3
          </Button>
          <Button
            spinerColor="success"
            size="sm"
            spinerType="grow"
            loading={isLoading4}
            outlineColor="danger"
            onClickOK={handleClick4}
          >
            Loading Button4
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ButtonLoadingExample;
