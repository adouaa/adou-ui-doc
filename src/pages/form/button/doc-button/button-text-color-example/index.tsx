import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonTextColorExampleProps {}

const ButtonTextColorExample = ({}: ButtonTextColorExampleProps) => {
  return (
    <div className="button-text-color-example mt-2">
      <Card>
        <div className="default-btn">
          <Button textColor="info" externalClassName="me-2" type="primary">
            primary
          </Button>
          <Button textColor="light" externalClassName="me-2" type="secondary">
            secondary
          </Button>
          <Button textColor="dark" externalClassName="me-2" type="danger">
            danger
          </Button>
          <Button textColor="warning" externalClassName="me-2" type="success">
            success
          </Button>
        </div>
        <div className="plain-btn mt-4">
          <Button
            textColor="primary"
            externalClassName="me-2"
            outlineColor="warning"
          >
            warning
          </Button>
          <Button
            textColor="secondary"
            externalClassName="me-2"
            outlineColor="info"
          >
            info
          </Button>
          <Button
            textColor="success"
            externalClassName="me-2"
            outlineColor="light"
          >
            light
          </Button>
          <Button
            textColor="danger"
            externalClassName="me-2"
            outlineColor="dark"
          >
            dark
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ButtonTextColorExample;
