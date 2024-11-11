import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Card from "@site/src/components/adou-card";
import Button from "../../../../../components/adou-button";

interface ButtonDisableExampleProps {}

const ButtonDisableExample = ({}: ButtonDisableExampleProps) => {
  return (
    <div className="button-disable-example">
      <Card>
        <div className="disable-btns">
          <div className="default-btn">
            <Button disabled externalClassName="me-2" type="primary">
              primary
            </Button>
            <Button disabled externalClassName="me-2" type="secondary">
              secondary
            </Button>
            <Button disabled externalClassName="me-2" type="danger">
              danger
            </Button>
            <Button disabled externalClassName="me-2" type="success">
              success
            </Button>
            <Button disabled externalClassName="me-2" type="warning">
              warning
            </Button>
            <Button disabled externalClassName="me-2" type="info">
              info
            </Button>
            <Button disabled externalClassName="me-2" type="light">
              light
            </Button>
            <Button disabled externalClassName="me-2" type="dark">
              dark
            </Button>
          </div>
          <div className="plain-btn mt-4">
            <Button disabled externalClassName="me-2" outlineColor="primary">
              primary
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="secondary">
              secondary
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="danger">
              danger
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="success">
              success
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="warning">
              warning
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="info">
              info
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="light">
              light
            </Button>
            <Button disabled externalClassName="me-2" outlineColor="dark">
              dark
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ButtonDisableExample;
