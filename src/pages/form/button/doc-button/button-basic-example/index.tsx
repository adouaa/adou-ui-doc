import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/web-elements/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonBasicExampleProps {}

const ButtonBasicExample = ({}: ButtonBasicExampleProps) => {
  return (
    <div className="button-basic-example mb-2">
      <Card>
        <div className="default-btn">
          <Button externalClassName="me-2" type="primary">
            primary
          </Button>
          <Button externalClassName="me-2" type="secondary">
            secondary
          </Button>
          <Button externalClassName="me-2" type="danger">
            danger
          </Button>
          <Button externalClassName="me-2" type="success">
            success
          </Button>
          <Button externalClassName="me-2" type="warning">
            warning
          </Button>
          <Button externalClassName="me-2" type="info">
            info
          </Button>
          <Button externalClassName="me-2" type="light">
            light
          </Button>
          <Button externalClassName="me-2" type="dark">
            dark
          </Button>
          <Button externalClassName="me-2">default</Button>
        </div>
        <div className="plain-btn mt-4">
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
        <div className="rounded-btn mt-4">
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

export default ButtonBasicExample;
