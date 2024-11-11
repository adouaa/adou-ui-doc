import { withTranslation } from "react-i18next";
import classNames from "classnames";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import React from "react";
import getAbsolutePositionOfStage from "utils/getAbsolutePosition";
import ReactDOM from "react-dom";


export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    width?: string;
    transparent?: boolean;
    maxHeight?: string;
    onChangeOK?: (e?: any, ...args: any) => void
    setFormItemValue?: (value: any) => void;
}

const Select = (props: SelectProps) => {

    setTimeout(() => {
        console.log("执行子组件");
        
    }, 1000);
    
    console.log("执行子组件");
    let k = 0;
    k++;
    console.log("k = ", k);
    
    const { width, defaultValue, options, placeholder, size, className, disabled, transparent, maxHeight, onChangeOK, setFormItemValue } = props;


    const [newOptions, setNewOptions] = useState(options || []);
    const [value, setValue] = useState(defaultValue || {});
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const cls = classNames({
        "custom-select": true,
        [`form-select form-select-${size}`]: true,
        [className as string]: className
    })

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        // context.handleChange(context.name, selectedOption);
        // context.checkValidate(selectedOption);
        setFormItemValue && setFormItemValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
    }

    const handleBlur = () => {
        setTimeout(() => {
            // context.checkValidate(value.value);
        }, 150);
    }

    // 测试getAbsolutePosition
    const customSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const handleDivClock = (e: any) => {
        // 新增使用createPortal来定位下拉框
        const position = getAbsolutePositionOfStage(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation(); // 阻止事件冒泡
        setShowOptions(!showOptions);
    }
    
    const handleOptionClick = (item: any) => {
        onChangeOK && onChangeOK(item);
        setValue(item);
    }


   /*  useEffect(() => {
        if (!context.formData[context.name as string]) {
            setValue({ label: "", value: "" });
        }
    }, [context.formData[context.name as string]]) */

    useEffect(() => {
        console.log("defaultValue = ", defaultValue);
        
        if (defaultValue) {
            const selectOption = options.find((option) => option.value === defaultValue);
            
            setValue(selectOption); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            // context.formData[context.name as string] = selectOption; // 让 Form里面对应的数据项有值
            setFormItemValue && setFormItemValue(selectOption);
        } else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            // setValue({value: " ", label: "请选择"});
        }
    })

    useEffect(() => {
        console.log("options = ", options);
        
        setNewOptions(options);
    }, [options])

    const handleClick = (e: any) => {
        let classNameList = ["custom-select form-control"];
        let value = e.target;
        if (!classNameList.includes(value.className)) {
            setShowOptions(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("click", handleClick)
        }
    })

    const handleClick11 = () => {
        console.log(5);
        
        setValue([]);
    }

    return <div className="select-wrapper" style={{width: width + "px"}}>
      <button onClick={handleClick11}>测试22</button>

        <div ref={customSelectRef} onClick={(e: any) => handleDivClock(e)} tabIndex={1} className="custom-select form-control" style={{textAlign: "left", background: transparent ? "transparent" : "#fff"}}>
        {value?.value ?  <span className="select-value">{value.label}</span> : <span className="select-placeholder">{placeholder}</span>}
            {<i onClick={(e: any) => handleDivClock(e)} className={`icon fa-solid fa-caret-right rotate-up ${showOptions ? "rotate-up" : "rotate-down"}`}></i>}
        </div>
        {ReactDOM.createPortal(
            <div style={{position: "absolute", top: (customSelectContentPosition.y + customSelectContentPosition.height) + "px", left: customSelectContentPosition.x + "px"}} ref={contentRef} className={`custom-select-content ${showOptions ? "custom-select-content-open" : ""}`}>
                {showOptions && newOptions.map(item => <div onClick={() => handleOptionClick(item)} className="option" key={item.value}>{item.label}</div>)}
            </div>,
            document.body
        )}
    </div>;
};


export default withTranslation()(Select);
