import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/web-elements/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonSizeExampleProps {}

const ButtonSizeExample = ({}: ButtonSizeExampleProps) => {
  return (
    <div className="button-size-example mt-2">
      <Card>
        <div className="size-btns">
          <div className="default-btn">
            <Button size="lg" externalClassName="me-2" type="primary">
              primary
            </Button>
            <Button externalClassName="me-2" type="secondary">
              secondary
            </Button>
            <Button size="sm" externalClassName="me-2" type="danger">
              danger
            </Button>
          </div>
          <div className="plain-btn mt-4">
            <Button size="lg" externalClassName="me-2" outlineColor="warning">
              warning
            </Button>
            <Button externalClassName="me-2" outlineColor="info">
              info
            </Button>
            <Button size="sm" externalClassName="me-2" outlineColor="dark">
              dark
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ButtonSizeExample;
