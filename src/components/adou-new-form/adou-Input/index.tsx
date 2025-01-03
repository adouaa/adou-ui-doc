import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  ReactNode,
} from "react";
import "./index.scss";

export interface InputProps {
  title?: string;
  wrap?: boolean;
  wrapperClassName?: string;
  backgroundColor?: string;
  inputStyle?: React.CSSProperties;
  prefix?: any; // 前缀
  suffix?: any; // 后缀
  addonBefore?: ReactNode | string | number;
  addonAfter?: ReactNode | string | number;
  varient?: "outlined" | "filled" | "borderless";
  valueKey?: string;
  labelKey?: string;
  wrapperWidth?: any;
  wrapperStyle?: React.CSSProperties;
  commonSuffixContent?: string;
  clearable?: boolean;
  formStyle?: React.CSSProperties;
  suffixContentExternalClassName?: string;
  inputExternalClassName?: string;
  textEnd?: boolean;
  name?: string;
  inline?: boolean;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  width?: any;
  label?: string;
  layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
  inputGroup?: boolean;
  labelColor?: string;
  required?: boolean;
  type?: "text" | "datetime-local" | "date" | "time" | "number";
  defaultValue?: any;
  size?: "lg" | "default" | "sm";
  externalClassName?: string;
  prefixContent?: any;
  suffixContent?: any;
  suffixContentType?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  transparent?: boolean;
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange?: (value: any) => void;
  onIconClick?: (value: string) => void;
  onFormDataChange?: (key: string, value: any) => void;
  onFieldChange?: (name: string, value: any) => void;
  onValidateField?: (name: string, value?: any) => void;
}

export interface InputRef {
  validate: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    title,
    wrap,
    wrapperClassName,
    backgroundColor,
    inputStyle,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    varient = "outlined",
    valueKey,
    labelKey,
    wrapperWidth,
    wrapperStyle,
    clearable = false,
    commonSuffixContent,
    formStyle,
    suffixContentExternalClassName,
    inputExternalClassName,
    textEnd,
    name,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    width = "100%",
    label,
    layout = "horizontal",
    labelColor,
    required = false,
    type = "text",
    defaultValue,
    size,
    externalClassName,
    prefixContent,
    suffixContent,
    suffixContentType = "button",
    placeholder,
    style,
    disabled,
    transparent,
    children,
    onClick,
    onFocus,
    onBlur,
    onChange,
    onIconClick,
    onFormDataChange,
    onFieldChange,
    onValidateField,
  },
  ref
) => {
  const [value, setValue] = useState(defaultValue ?? "");
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputFormContentRef = useRef<any>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ...args: any
  ) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    ...args: any
  ) => {
    e.stopPropagation();
    if (varient === "filled" && inputFormContentRef.current && !disabled) {
      inputFormContentRef.current.style.backgroundColor = "";
      setIsFocus(true);
    }
    onFocus && onFocus(e);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    ...args: any
  ) => {
    onBlur && onBlur(e);
    handleValidate(value);
    if (varient === "filled" && inputFormContentRef.current) {
      inputFormContentRef.current.style.backgroundColor = "#f0f0f0";
    }
    setIsFocus(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    ...args: any
  ) => {
    const value = e.target.value;
    const returnValue = type === "number" ? Number(value) : value;
    setValue(value);
    onChange && onChange(returnValue);
    onFormDataChange && onFormDataChange(name!, returnValue);
    handleFieldChange && handleFieldChange(returnValue);
    handleValidate(value);
  };

  const handleIconClick = () => {
    onIconClick && onIconClick(value);
  };

  const [error, setError] = useState<boolean>(false);

  const handleFieldChange = (value: any) => {
    onFieldChange && onFieldChange(name!, value);
  };

  const handleValidate = (data: any) => {
    onValidateField && onValidateField(name!, data);
  };

  const validate = () => {};
  const clear = () => {
    setValue("");
  };

  const handleMouseEnter = () => {
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const handleClearIconClick = () => {
    clear();
    handleFieldChange("");
    handleFieldChange("");
    console.log("5: ", 5);
    handleValidate("");
  };

  const generateClsWhenHasLabel = () => {
    switch (layout) {
      case "horizontal":
        return "adou-input-label-horizontal";

      case "horizontal-top":
        return "adou-input-label-horizontal-top";

      case "vertical":
        return "adou-input-label-vertical";
    }
  };

  const judgeBgColor = () => {
    if (disabled) {
      return "#eee";
    } else if (varient === "filled") {
      return "#f0f0f0";
    } else if (backgroundColor) {
      return backgroundColor;
    } else {
      return "transparent";
    }
  };

  const judgeBorder = () => {
    if (varient === "borderless") {
      return "border-0";
    } else if (varient === "filled" && !addonAfter && !addonBefore) {
      return "border-0";
    } else {
      return "";
    }
  };

  const commonElement = (
    <>
      <input
        className={`input border-0 flex-fill ${
          textEnd || type === "number" ? "text-end" : ""
        } ${
          suffixContent && suffixContentType === "button"
            ? "suffix-content-btn"
            : ""
        } ${inputExternalClassName || ""} `}
        ref={inputRef}
        required={required}
        style={{
          flex: 1,
          width,
          outline: "none",
          ...(varient === "filled" && { backgroundColor: "transparent" }),
          ...(addonBefore && {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
          ...(addonAfter && {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          height: size === "lg" ? "48px" : size === "sm" ? "32px" : "40px",
          backgroundColor: judgeBgColor(),
          cursor: disabled ? "not-allowed" : "auto",
          borderRadius: "0.375rem", // 和父组件的 borderRadius 保持一致
          ...inputStyle,
        }}
        step={1}
        name={name}
        value={value}
        readOnly={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={(e) => handleBlur(e)}
        onFocus={(e) => handleFocus(e)}
        onClick={(e) => handleClick(e)}
        type={type}
      />
      {suffix && <div className="suffix-box">{suffix}</div>}

      {clearable && true && value ? (
        <span
          className="adou-input-clear-icon-box fade-enter me-1"
          style={{
            top: size === "sm" ? "2px" : size === "lg" ? " 10px" : "6px",
          }}
        >
          <i
            className="adou-input-clear-icon fa-regular fa-circle-xmark text-secondary flex-fill"
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={handleClearIconClick}
          ></i>
        </span>
      ) : (
        <div
          className="adou-input-common-sufiix-content position-absolute text-secondary"
          style={{
            right: "14px",
            top: size === "sm" ? "14%" : size === "lg" ? " 26%" : "18%",
          }}
        >
          {commonSuffixContent}
        </div>
      )}
    </>
  );

  // Expose validate method via ref
  useImperativeHandle(ref, () => ({
    validate,
    clear,
  }));

  useEffect(() => {
    if (defaultValue || defaultValue === 0) {
      setValue(defaultValue);
    } else {
      setValue("");
    }
    if (defaultValue) {
      setError(false);
    }
  }, [defaultValue]);

  /**
   * 获取组件的高度赋值给label
   */
  const wrapeerRef = useRef<any>();
  useEffect(() => {}, []);

  return (
    <div
      title={title || label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`adou-input-wrapper position-relative ${
        wrapperClassName ? wrapperClassName : ""
      }`}
      style={{
        ...wrapperStyle,
        ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
        cursor: disabled ? "not-allowed" : "auto",
      }}
    >
      {!label && (addonAfter || addonBefore) ? (
        <div className={`adou-input`}>
          <div
            className="input-group"
            style={{
              flexWrap: wrap ? "wrap" : "nowrap",
              // height: size === 'lg' ? '48px' : size === 'sm' ? '32px' : '40px',
            }}
          >
            {addonBefore && (
              <span
                className="input-group-text py-0"
                style={{ fontSize: "14px" }}
              >
                {addonBefore}
              </span>
            )}
            <div
              style={{
                ...(varient === "filled" && {
                  border: addonBefore || addonAfter ? "" : "none",
                }),
                ...formStyle,
                backgroundColor: judgeBgColor(),
                border: varient === "outlined" ? "1px solid #ced4da" : "",
              }}
              ref={inputFormContentRef}
              tabIndex={1}
              className={`adou-input-form-content d-flex flex-fill align-items-center ${
                isFocus ? "adou-form-control-focus" : ""
              } ${type !== "number" ? "px-2" : ""}`}
            >
              {prefix && <div className="prefix-box">{prefix}</div>}
              <div
                className={`input-box flex-fill d-flex  align-items-center ${
                  type !== "number" ? "px-2" : ""
                }`}
              >
                {commonElement}
              </div>
            </div>
            {addonAfter && (
              <span
                className="input-group-text py-0"
                style={{ fontSize: "14px" }}
              >
                {addonAfter && addonAfter}
              </span>
            )}
          </div>
        </div>
      ) : (
        // 只有在是 label 的情况下才去对 生成对应的类名
        <div className={`adou-input flex-fill ${generateClsWhenHasLabel()}`}>
          {label && (
            <span
              className={`pe-3 ${layout === "vertical" ? "pb-1" : ""}`}
              style={{
                width: labelWidth || 22 * label.length,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          )}
          <div
            tabIndex={1}
            style={{
              width: "100%",
              ...(varient === "filled" && {
                backgroundColor: "#f0f0f0",
                border: "none",
              }),
              border: varient === "outlined" ? "1px solid #ced4da" : "",
              backgroundColor: judgeBgColor(),
              ...formStyle,
            }}
            ref={inputFormContentRef}
            className={`adou-input-form-content flex-fill d-flex align-items-center ${
              isFocus ? "adou-form-control-focus" : ""
            } ${judgeBorder()} ${type !== "number" ? "px-2" : ""}`}
          >
            {prefix && <div className="prefix-box">{prefix}</div>}
            <div
              className={`input-box flex-fill d-flex align-items-center ${
                type !== "number" ? "px-2" : ""
              }`}
            >
              {commonElement}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Input.displayName = "Input";

export default forwardRef(Input);
