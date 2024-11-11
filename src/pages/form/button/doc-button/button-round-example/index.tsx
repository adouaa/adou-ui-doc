import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonRoundExampleProps {}

const ButtonRoundExample = ({}: ButtonRoundExampleProps) => {
  return (
    <div className="button-round-example">
      <Card>
        <div className="rounded-btn mt-2">
          <Button round externalClassName="me-2" outlineColor="primary">
            primary
          </Button>
          <Button round externalClassName="me-2" outlineColor="secondary">
            secondary
          </Button>
          <Button round externalClassName="me-2" outlineColor="danger">
            danger
          </Button>
          <Button round externalClassName="me-2" outlineColor="success">
            success
          </Button>
          <Button round externalClassName="me-2" outlineColor="warning">
            warning
          </Button>
          <Button round externalClassName="me-2" outlineColor="info">
            info
          </Button>
          <Button round externalClassName="me-2" outlineColor="light">
            light
          </Button>
          <Button round externalClassName="me-2" outlineColor="dark">
            dark
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ButtonRoundExample;
