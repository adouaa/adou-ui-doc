import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import HorizonScrollView from "@site/src/components/web-elements/adou-horizontal-scroll-view";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <div className="basic-wrapper">
      <HorizonScrollView>
        <div className="scroll-item px-3">Item1</div>
        <div className="scroll-item px-3">Item2</div>
        <div className="scroll-item px-3">Item3</div>
        <div className="scroll-item px-3">Item4</div>
        <div className="scroll-item px-3">Item5</div>
        <div className="scroll-item px-3">Item6</div>
        <div className="scroll-item px-3">Item7</div>
        <div className="scroll-item px-3">Item8</div>
        <div className="scroll-item px-3">Item9</div>
        <div className="scroll-item px-3">Item10</div>
        <div className="scroll-item px-3">Item11</div>
        <div className="scroll-item px-3">Item12</div>
        <div className="scroll-item px-3">Item13</div>
        <div className="scroll-item px-3">Item14</div>
      </HorizonScrollView>
    </div>
  );
};

export default Basic;
