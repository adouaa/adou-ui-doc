import React, {
  useEffect,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useId,
} from "react";
import "./index.scss";

interface CheckboxProps {
  contentWidth?: any;
  id?: any;
  wrapperWidth?: any;
  valueKey?: string;
  labelKey?: string;
  returnType?: "str" | "obj";
  suffixContentType?: string;
  suffixContent?: any;
  name?: string;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  inputGroup?: boolean;
  label?: string;
  labelPosition?: "left-top" | "center" | "top" | "input-group";
  labelColor?: string;
  required?: boolean;
  defaultValue?: string | string[] | any[];
  externalClassName?: string;
  options?: any[];
  inline?: boolean;
  wrap?: boolean;
  onChange?: (item: any[]) => void;
  onFormDataChange?: (key: string, value: any) => void;
  onFieldChange?: (name: string, value: any) => void;
  onValidateField?: (name: string, value?: any) => void;
}

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = (
  {
    contentWidth,
    id,
    wrapperWidth,
    valueKey = "value",
    labelKey = "label",
    returnType,
    suffixContentType = "button",
    suffixContent,
    name,
    isFormItem,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    readOnly,
    label,
    labelPosition,
    labelColor,
    inputGroup = false,
    required = false,
    externalClassName,
    inline = true,
    options = [],
    // defaultValue = [], defaultValue不能给成数组默认值，不然会无限循环
    defaultValue,
    wrap = true,
    onChange,
    onFormDataChange,
    onFieldChange,
    onValidateField,
  },
  ref
) => {
  const checkboxId = useId();

  // Function to check if an option should be checked
  const isChecked = (
    value: string,
    defaultValue: string | string[] | { label: string; value: string }[] | any
  ) => {
    if (typeof defaultValue === "string") {
      return value === defaultValue;
    } else if (Array.isArray(defaultValue)) {
      if (typeof defaultValue[0] !== "string") {
        return defaultValue!.some((item) => item.value === value);
      } else {
        return defaultValue!.some((item) => item === value);
      }
    } else {
      return (
        defaultValue?.[valueKey] === value || defaultValue?.[labelKey] === value
      );
    }
    return false;
  };

  // Initialize optionsList based on defaultValue
  const initialOptions = options.map((option) => ({
    ...option,
    checked: isChecked(option.value, defaultValue),
  }));

  const [optionsList, setOptionsList] = useState(initialOptions);

  const handleFieldChange = (value: any) => {
    onFieldChange && onFieldChange(name!, value);
  };

  const handleValidate = (data: any) => {
    onValidateField && onValidateField(name!, data);
  };

  const handleChange = (item: { label: string; value: string }) => {
    const updatedOptions = optionsList.map((option) => {
      if (option.value === item.value) {
        option.checked = !option.checked;
      }
      return option;
    });

    setOptionsList(updatedOptions);
    const data = updatedOptions.filter((opt) => opt.checked);
    onChange && onChange(data);

    if (returnType === "obj") {
      onFormDataChange && onFormDataChange(name!, data);
      handleFieldChange(data);
      handleValidate(data);
    } else {
      const returnData = data.map((item: any) => item[valueKey || labelKey]);
      onFormDataChange && onFormDataChange(name!, returnData);
      handleFieldChange(returnData);
      handleValidate(returnData);
    }
    if (updatedOptions.some((option: any) => option.checked)) {
      setError(false);
    } else {
      if (required) {
        setError(true);
      }
    }
  };

  const handleBlur = () => {
    const checkedList = optionsList.filter((item) => item.checked);
    // Optionally handle blur event
    handleValidate(checkedList);
  };

  const [error, setError] = useState<boolean>(false);
  const validate = () => {
    if (!required) return true;
    if (optionsList.some((item: any) => item.checked)) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  const clear = () => {
    setOptionsList(
      optionsList.map((item: any) => {
        item.checked = false;
        return item;
      })
    );
  };
  const handleClickCommonSuffixIcon = () => {
    clear();
    setError(true);
  };
  // Expose validateInput method via ref
  useImperativeHandle(ref, () => ({
    validate,
    clear,
  }));

  useEffect(() => {
    // Update optionsList when defaultValue changes
    const updatedOptions = options.map((option) => ({
      ...option,
      checked: isChecked(option.value, defaultValue),
    }));
    setOptionsList(updatedOptions);
  }, [defaultValue, options]);

  return (
    <div
      className={`${
        !error && isFormItem ? "mb-3" : ""
      } checkbox-wrapper ${externalClassName}`}
      style={{ width: wrapperWidth }}
    >
      <div
        className={`content-box d-flex ${
          inputGroup ? "inputGroup" : `label-in-${labelPosition}`
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
          className="checkbox-form-content option-box"
          style={{
            display: inline ? "flex" : "block",
            width: contentWidth,
            flexWrap: wrap ? "wrap" : "nowrap",
            ...(contentWidth ? {} : { flex: 1 }),
          }}
        >
          {optionsList.map((item: any, index: number) => (
            <div
              key={item.value}
              className={`form-check ${
                index !== optionsList.length - 1 ? "me-2" : ""
              }`}
              style={{
                textAlign: "left",
                marginRight: "20px",
                marginBottom: 0,
              }}
            >
              <input
                ref={ref} // 将 ref 绑定到 input 元素
                required={required}
                onBlur={handleBlur}
                className={"form-check-input"}
                type="checkbox"
                name={name}
                id={(id || checkboxId) + item.value}
                checked={item.checked}
                onChange={() => handleChange(item)}
                value={item.value}
                readOnly={readOnly}
              />
              <label
                className="form-check-label"
                htmlFor={id || checkboxId + item.value}
              >
                {item.label || "Default Checkbox"}
              </label>
            </div>
          ))}
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
          className="fadeInDown mb-1"
          style={{
            color: "#DC3545",
            fontSize: "14px",
            paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth,
          }}
        >{`${errMsg || `${label || name}不能为空`}`}</div>
      )}
    </div>
  );
};

const forWardCheckbox = forwardRef(Checkbox);
forWardCheckbox.displayName = "Checkbox";

export default forWardCheckbox;
