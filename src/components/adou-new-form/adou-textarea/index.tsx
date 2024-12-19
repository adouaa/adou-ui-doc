import { useEffect, useImperativeHandle, useState, useRef } from "react";
import React from "react";
import "./index.scss";
import classNames from "classnames";

interface TextAreaProps {
  rows?: number;
  suffixContentType?: string;
  suffixContent?: any;
  name?: string;
  inline?: boolean;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  externalClassName?: string;
  width?: any;
  inputGroup?: boolean;
  labelPosition?: "left-top" | "center" | "top" | "input-group";
  labelColor?: string;
  required?: boolean;
  ref?: any;
  defaultValue?: string;
  label?: any;
  placeholder?: string;
  disabled?: boolean;
  onChangeOK?: (value: any, ...args: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
  autoSize?: { minRows?: number; maxRows?: number };
}

const TextArea: React.FC<TextAreaProps> = React.forwardRef(
  (props: TextAreaProps, ref) => {
    const {
      rows,
      suffixContentType = "button",
      suffixContent,
      errMsg,
      inline,
      isFormItem,
      labelWidth,
      labelColor,
      commonSuffixIcon,
      readOnly,
      externalClassName,
      width,
      inputGroup = false,
      labelPosition = "center",
      required = false,
      name,
      label,
      placeholder,
      disabled,
      defaultValue,
      onChangeOK,
      onFormDataChange,
      autoSize,
    } = props;

    const [value, setValue] = useState(defaultValue ?? "");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
      ...args: any
    ) => {
      setValue(e.target.value);
      adjustHeight();
      onChangeOK && onChangeOK(e.target.value, ...args);
      onFormDataChange && onFormDataChange(name!, e.target.value);
    };

    const adjustHeight = () => {
      if (textareaRef.current && autoSize?.minRows && autoSize?.maxRows) {
        const height = textareaRef.current.style.height;
        const lineHeight = 28; // 假设每行的高度为28px，大概的值
        const minHeight = autoSize.minRows * lineHeight;
        const maxHeight = autoSize.maxRows * lineHeight;

        textareaRef.current.style.height = "auto";
        const newHeight = Math.min(
          Math.max(textareaRef.current.scrollHeight, minHeight),
          maxHeight
        );
        if (newHeight >= maxHeight) {
          textareaRef.current.style.overflowY = "auto";
        } else {
          // 隐藏 Y 轴滚动条
          textareaRef.current.style.overflowY = "hidden";
        }
        textareaRef.current.style.height = `${newHeight}px`;
      }
    };

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      validate();
    };

    const handleClickCommonSuffixIcon = () => {
      setValue("");
      setError(true);
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
      if (!required) return true;
      if (value) {
        setError(false);
        return true;
      } else {
        setError(true);
        return false;
      }
    };
    const clear = () => {
      setValue("");
    };

    useImperativeHandle(ref, () => ({
      validate,
      clear,
    }));

    const textareaClasses = classNames({
      "textarea-warpper": true,
      [externalClassName as string]: externalClassName,
    });

    useEffect(() => {
      if (defaultValue) {
        setValue(defaultValue);
      } else {
        setValue("");
      }
      adjustHeight();
    }, [defaultValue]);

    return (
      <div
        className={`${textareaClasses} ${!error && isFormItem && "mb-3"}`}
        style={{ width }}
      >
        <div
          className={`label-in-${labelPosition} ${
            inputGroup ? "input-group" : ""
          }`}
        >
          {label && (
            <span
              style={{ color: labelColor, width: labelWidth }}
              className={`${inputGroup ? "input-group-text" : ""} label-box`}
            >
              {label}
            </span>
          )}
          <div
            className={`textarea-form-content ${
              labelPosition === "top" && inline ? "me-2" : ""
            }`}
          >
            <textarea
              ref={textareaRef}
              style={{
                width,
                ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
                ...(suffixContent && suffixContentType === "button"
                  ? {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }
                  : {}),
                resize: autoSize ? "none" : "vertical",
              }}
              rows={rows}
              readOnly={readOnly}
              required={required}
              name={name}
              value={value}
              disabled={disabled}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              placeholder={placeholder}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
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
        {error && required && (
          <div
            className="animate__animated animate__fadeIn"
            style={{
              color: "#DC3545",
              paddingLeft:
                parseInt(labelWidth) > 120
                  ? "120px"
                  : parseFloat(labelWidth) + 20 + "px",
            }}
          >{`${errMsg || `${label || name}不能为空`}`}</div>
        )}
      </div>
    );
  }
);

export default TextArea;
