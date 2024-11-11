import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonOutlineExampleProps {}

const ButtonOutlineExample = ({}: ButtonOutlineExampleProps) => {
  return (
    <div className="button-plain-example">
      <Card>
        <div className="plain-btn mt-2">
          <Button externalClassName="me-2" outlineColor="primary">
            primary
          </Button>
          <Button externalClassName="me-2" outlineColor="secondary">
            secondary
          </Button>
          <Button externalClassName="me-2" outlineColor="danger">
            danger
          </Button>
          <Button externalClassName="me-2" outlineColor="success">
            success
          </Button>
          <Button externalClassName="me-2" outlineColor="warning">
            warning
          </Button>
          <Button externalClassName="me-2" outlineColor="info">
            info
          </Button>
          <Button externalClassName="me-2" outlineColor="light">
            light
          </Button>
          <Button externalClassName="me-2" outlineColor="dark">
            dark
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ButtonOutlineExample;
