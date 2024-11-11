import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

import "./index.scss";

interface TagInputProps {
  suffixContentType?: string;
  suffixContent?: any;
  name?: string;
  isFormItem?: boolean;
  required?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  width?: any;
  label?: string;
  labelPosition?: "left-top" | "center" | "top";
  inputGroup?: boolean;
  labelColor?: string;
  defaultValue?: any;
  onChange?: (value: any) => void;
}

const TagInput = React.forwardRef(
  (
    {
      suffixContentType = "button",
      suffixContent,
      required,
      isFormItem,
      errMsg,
      labelWidth,
      commonSuffixIcon,
      readOnly,
      width,
      label,
      labelColor,
      inputGroup = false,
      labelPosition = "center",
      name,
      defaultValue,
      onChange,
    }: TagInputProps,
    ref
  ) => {
    const [inputList, setInputList] = useState<any>(defaultValue || []);

    const [inputValue, setInputValue] = useState("");

    const [isHighlighted, setIsHighlighted] = useState(false);

    const addInput = () => {
      // 因为state是异步的，所以要把数据先处理好再使用
      const data = [...inputList, inputValue];
      setInputList(data);
      setInputValue("");
      // 把数据传回给父组件
      onChange && onChange(data);
      setError(false);
    };

    const handleInputChange = (e: any) => {
      setInputValue(e.target.value);
    };

    const handleKeyDown = (event: any) => {
      const value = event.target.value.trim(); // 会有一个空格存在，要去掉
      if (!value) return;
      let flag = false;
      if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault(); // 阻止默认行为，防止提交表单或失去焦点
        flag =
          inputList.length > 0 && inputList.some((item: any) => item === value);
        !flag && addInput();
      }
    };

    const handleDeleteItem = (item: any) => {
      const tagList = inputList.filter((value: any) => item !== value);
      if (!tagList.length) {
        setError(true);
      }
      setInputList(tagList);
      onChange && onChange(tagList);
      // 注意，这边不能直接用 inputList给 formData赋值，会出现不一致的情况
    };

    const handleBlur = () => {
      // 注意，这边要在 inpuut失焦的时候触发，不能在 input change的时候触发，不然会出现校验错误
      setIsHighlighted(false);
      // 失焦之后就直接让 input输入了但是为保存的值清空，防止用户出现误解，优化体验
      setInputValue("");
    };

    const handleFocus = () => {
      setIsHighlighted(true);
    };

    const inputRef = useRef<any>();
    const handleClickFormControl = () => {
      inputRef.current.focus();
    };

    const getValue = () => {
      return inputList || [];
    };
    // 校验方法
    const [error, setError] = useState<boolean>(false);
    const validate = () => {
      if (!required) return true;
      if (inputList.length) {
        setError(false);
        return true;
      } else {
        setError(true);
        return false;
      }
    };
    // 清除内容方法
    const clear = () => {
      setInputList("");
    };
    const handleClickCommonSuffixIcon = () => {
      clear();
      setError(true);
    };
    // Expose validate method via ref
    useImperativeHandle(ref, () => ({
      getValue,
      validate,
      clear,
    }));

    useEffect(() => {
      if (defaultValue?.length) {
        setInputList(defaultValue);
      } else {
        setInputList([]);
      }
    }, [defaultValue]);

    return (
      <div
        className={`tag-input-wrapper ${!error && isFormItem && "mb-3"}`}
        style={{ width }}
      >
        <div
          className={`content-box ${
            inputGroup ? "inputGroup" : `label-in-${labelPosition}`
          }`}
        >
          <span
            className={`label-box ${inputGroup ? "input-group-text" : ""}`}
            style={{ color: labelColor, width: labelWidth }}
          >
            {label}
          </span>
          <div className="tag-input-form-content">
            <div
              style={{
                display: "flex",
                ...(suffixContentType === "button"
                  ? {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      // borderRight: "none",
                    }
                  : {}),
              }}
              onClick={handleClickFormControl}
              className={`form-control ${isHighlighted ? "focus" : ""}`}
            >
              <ul className="tag-input-list">
                {Array.isArray(inputList) &&
                  inputList.map((item: any) => {
                    return (
                      <li className="list-item" key={item}>
                        {item}
                        <span
                          onClick={() => handleDeleteItem(item)}
                          className="item-icon"
                        >
                          x
                        </span>
                      </li>
                    );
                  })}
              </ul>
              <div className="tag-input-control">
                <input
                  readOnly={readOnly}
                  ref={inputRef}
                  name={name}
                  value={inputValue}
                  autoComplete="off"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={(e) => handleInputChange(e)}
                  onKeyDown={handleKeyDown}
                  placeholder="空格或回车分割"
                  type="text"
                  className="input"
                ></input>
              </div>
            </div>
            {suffixContent && (
              <div
                className={`${
                  suffixContentType === "button"
                    ? "suffix-content-btn-wrapper px-2"
                    : "ms-2"
                }`}
              >
                {suffixContent}
              </div>
            )}
          </div>
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} common-suffix-icon ms-2`}
            ></i>
          )}
        </div>

        {/* 实现点击后高亮，div必须加上 form-control，这个类名会空值高亮以动画效果出现。并且 focus类名必须动态添加 */}
        {error && required && (
          <div
            className="animate__animated animate__fadeIn"
            style={{
              color: "#DC3545",
              paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth,
            }}
          >{`${errMsg || `${label}不能为空`}`}</div>
        )}
      </div>
    );
  }
);

export default TagInput;
