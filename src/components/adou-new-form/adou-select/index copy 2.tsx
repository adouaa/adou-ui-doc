import { withTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import getAbsolutePositionOfStage from "utils/getAbsolutePosition";
import React from "react";

export interface SelectProps {
    name?: string;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    width?: string;
    transparent?: boolean;
    maxHeight?: string;
    onChangeOK?: (e?: any, ...args: any) => void;
    setFormItemValue?: (value: any) => void;
    showEmpty?: boolean;
}

const Select = (props: SelectProps) => {
    const { showEmpty = true, name, width, defaultValue, options, placeholder, transparent, onChangeOK } = props;

    const [newOptions, setNewOptions] = useState(options || []);
    const [value, setValue] = useState(defaultValue || {});
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const customSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const handleDivClick = (e: any) => {
        const position = getAbsolutePositionOfStage(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation();
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (item: any) => {
        setValue(item);
        onChangeOK && onChangeOK(item);
        setShowOptions(false);
    };

    useEffect(() => {
        if (defaultValue) {
            const selectOption = options.find((option) => option.value === defaultValue);
            setValue(selectOption || {});
        } else {
            setValue({});
        }
    }, [defaultValue, options]);

    useEffect(() => {
        const enhancedOptions = showEmpty ? [{ label: "空", value: null }, ...options] : options;
        setNewOptions(enhancedOptions);
    }, [options, showEmpty]);

    const handleClick = (e: any) => {
        let classNameList = ["custom-select", "form-control"];
        let value = e.target;
        if (!classNameList.some(className => value.classList.contains(className))) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="select-wrapper" style={{ width: width }}>
            <select onClick={handleDivClick} className="custom-select form-control" ref={customSelectRef} name={name} value={value?.value}>
                <option style={{display: "none"}} value={value?.value}>{value?.label}</option>
            </select>
            
            {ReactDOM.createPortal(
                <div
                    style={{
                        position: "absolute",
                        top: customSelectContentPosition.y + customSelectContentPosition.height,
                        left: customSelectContentPosition.x,
                        zIndex: 99999
                    }}
                    ref={contentRef}
                    className={`custom-select-content ${showOptions ? "custom-select-content-open" : ""}`}
                >
                    {showOptions && newOptions.map(item => <div onClick={() => handleOptionClick(item)} className="option" key={item.value}>{item.label}</div>)}
                </div>,
                document.body
            )}
        </div>
    );
};

export default withTranslation()(Select);
