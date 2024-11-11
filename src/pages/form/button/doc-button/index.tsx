import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import ButtonBasicExample from './button-basic-example';
import ButtonDisableExample from './button-disable-example';
import ButtonSizeExample from './button-size-example';
import ButtonTextColorExample from './button-text-color-example';
import ButtonLoadingExample from './button-loading-example';
import ButtonIconExample from './button-icon-example';

interface TestButtonProps {}

const TestButton = ({}: TestButtonProps) => {
    return (
        <div className="test-button-wrapper">
            <ButtonBasicExample></ButtonBasicExample>
            <ButtonDisableExample></ButtonDisableExample>
            <ButtonSizeExample></ButtonSizeExample>
            <ButtonTextColorExample></ButtonTextColorExample>
            <ButtonLoadingExample></ButtonLoadingExample>
            <ButtonIconExample></ButtonIconExample>
        </div>
    );
};

export default TestButton;
