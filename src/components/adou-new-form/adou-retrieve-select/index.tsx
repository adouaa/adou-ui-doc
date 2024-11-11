import classNames from "classnames";
import React, { useImperativeHandle } from "react";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useClickOutside from "../../../common/hooks/useClickOutside";
import getAbsolutePosition from "@site/src/common/utils/getAbsolutePosition";

export interface SelectProps {
  maxSelectedListWidth?: any;
  maxHeight?: string;
  activeColor?: { font: string; bgc: string };
  returnType?: "str" | "obj";
  showDefaultValue?: boolean;
  labelKey?: string;
  valueKey?: string;
  name?: string;
  inline?: boolean;
  suffixContent?: any;
  suffixContentType?: string;
  contentWidth?: any;
  isFormItem?: boolean;
  attribute?: string;
  required?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  width?: any;
  label?: string;
  labelPosition?: "left-top" | "center" | "top";
  inputGroup?: boolean;
  labelColor?: string;
  defaultValue?: any;
  options: any[];
  placeholder?: string;
  size?: "sm" | "lg";
  externalClassName?: string;
  readOnly?: any;
  showSelected?: boolean;
  single?: boolean;
  onInputChange?: (e?: any, ...args: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
}

interface RetrieveSelectProps extends SelectProps {
  onRetrieveSelectChange?: (selectedOptions: any[]) => void;
  onDelete?: () => void;
}

const RetrievrSelect: React.FC<RetrieveSelectProps> = React.forwardRef(
  (props: RetrieveSelectProps, ref) => {
    const {
      maxSelectedListWidth,
      maxHeight = "300px",
      activeColor = { font: "#fff", bgc: "#2783d8" },
      returnType,
      showDefaultValue = true,
      placeholder = "请输入",
      isFormItem = true,
      labelKey = "label",
      valueKey = "value",
      inline,
      suffixContent,
      suffixContentType = "button",
      contentWidth,
      required,
      errMsg,
      labelWidth,
      commonSuffixIcon,
      width,
      label,
      labelColor,
      labelPosition = "center",
      inputGroup = false,
      single = true,
      name,
      defaultValue,
      showSelected = true,
      options,
      size,
      externalClassName,
      readOnly = false,
      onInputChange,
      onRetrieveSelectChange,
      onDelete,
      onFormDataChange,
    } = props;

    const searchValueRef = useRef<string>(defaultValue || "");
    const [tempOptions, setTempOptions] = useState<any>(options || []);
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [showSelectedList, setShowSelectedList] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项
    const [isInputFocusing, setIsInputFocusing] = useState<boolean>(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);

    const retrieveInputRef = useRef<any>();
    const selectListRef = useRef<any>();
    const retrieveSelectWrapperFormControlRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] =
      useState<any>({});

    const toggleDropdown = () => {
      setIsOpen((prev: boolean) => !prev);
    };

    const handleClose = () => {
      if (readOnly) return;

      if (isOpen) {
        validate();
        setClosing(true);
        setTimeout(() => {
          setClosing(false);
          setIsOpen((prev: boolean) => !prev);
        }, 100);
      } else {
        setIsOpen((prev: boolean) => !prev);
      }

      setShowOptions(false);
      setIsInputFocusing(false);
      retrieveInputRef.current.value = "";
      validate(); // 不能在 div onBlur的时候调用这个函数
      setFocusedIndex(-1);
    };

    useClickOutside(
      [retrieveSelectWrapperFormControlRef, contentRef],
      handleClose,
      isOpen && contentRef.current
    );

    const handleSelect = (option: any) => {
      if (!option) return;
      retrieveInputRef.current.value = "";
      const currentSelectList = optionList
        .filter((item: any) => item[valueKey] != option[valueKey])
        .filter((i: any) => i.selected);

      if (option.selected) {
        option.selected = false;
        if (currentSelectList.length) {
          setError(false);
        } else {
          if (!required) {
            setError(false);
          } else {
            setError(true);
          }
        }
      } else {
        setError(false);
        if (single) {
          setOptionList((preArr: any) => {
            return preArr.map((item: any) => {
              if (item[valueKey] === option[valueKey]) {
                item.selected = true;
              } else {
                item.selected = false;
              }
              return item;
            });
          });
        } else {
          setOptionList((preArr: any) => {
            return preArr.map((item: any) => {
              if (!item.selected) {
                if (item[valueKey] === option[valueKey]) {
                  item.selected = true;
                }
              }
              return item;
            });
          });
        }
      }
      let hasSelected = selectedOptions.some(
        (item) => item[labelKey] === option[labelKey]
      );
      if (single) {
        const data = hasSelected ? [] : [option];
        setSelectedOptions(data);
        onRetrieveSelectChange &&
          onRetrieveSelectChange(hasSelected ? {} : option);
        if (returnType === "obj" || showDefaultValue) {
          onFormDataChange && onFormDataChange(name!, data[0]);
        } else {
          onFormDataChange && onFormDataChange(name!, data[0]?.[valueKey]);
        }
      } else {
        const currentSelectedOptions = [...selectedOptions, option];
        const data = hasSelected
          ? selectedOptions.filter(
              (item: any) => item[valueKey] !== option[valueKey]
            )
          : currentSelectedOptions;
        setSelectedOptions(data);
        onRetrieveSelectChange && onRetrieveSelectChange(data);
        onFormDataChange && onFormDataChange(name!, data);
      }
      setShowSelectedList(true);

      setShowOptions(false);
      setIsOpen(false);
      setIsInputFocusing(false);

      setFocusedIndex(-1);
    };

    const handleInputClick = (e: any) => {
      setIsHighlighted(true);
    };

    // 输入框聚焦
    const handleInputFocus = () => {
      setIsInputFocusing(single);
      if (single) {
        retrieveInputRef.current.value = selectedOptions[0]?.[labelKey] || "";
        retrieveInputRef.current.select();
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target?.value;
      searchValueRef.current = value;
      onInputChange && onInputChange(e.target?.value);
      // 搜索词修改时也需要展示选项--为了防止有值的时候 handleFocus无法打开
      setIsOpen(true);
      setTimeout(() => {
        setShowOptions(true);
      }, 10);
    };

    const handleDeleteItem = (item: any) => {
      const selectedList = selectedOptions.filter((option) => option !== item);
      setSelectedOptions(selectedList);
      setOptionList(
        optionList.map((v: any) => {
          if (v[labelKey] === item[labelKey]) {
            v.selected = false;
          }
          return v;
        })
      );
      validate();
      onDelete && onDelete();
    };

    const handleBlur = () => {};

    const handleWrapperClick = (e: any) => {
      if (readOnly) return;
      // retrieveInputRef.current && retrieveInputRef.current.focus();
      setIsHighlighted(true);
      const position = getAbsolutePosition(
        retrieveSelectWrapperFormControlRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
      if (!isOpen && selectedOptions.length === 0) {
        toggleDropdown();
      }
      // 为了适配通过tab键来定位聚焦，把这些点击的逻辑去掉
      /* if (!isOpen) {
          toggleDropdown();
  
          // e.stopPropagation(); 这里不能加，否则会导致Select展开的时候点击RetrieveSelect无法关闭Select的选项
          setTimeout(() => {
            setShowOptions(true);
          }, 10);
        } else {
          setShowOptions(false);
          toggleDropdown();
        } */
    };

    const getValue = () => {
      return selectedOptions;
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
      if (!required) return true;
      if (selectedOptions.length) {
        setError(false);
        return true;
      } else {
        setError(true);
        return false;
      }
    };

    const clear = () => {
      setSelectedOptions([]);
      setOptionList(
        optionList.map((option: any) => {
          option.selected = false;
          return option;
        })
      );
    };

    const handleClickCommonSuffixIcon = () => {
      clear();
      if (required) setError(true);
    };

    useImperativeHandle(ref, () => ({
      getValue,
      validate,
      clear,
    }));

    const judgeOptionsByAttribute = (arr: any, item: any) => {
      arr.forEach((i: any) => {
        if (i[valueKey] === item[valueKey]) {
          i.selected = true;
        }
      });
      setOptionList(arr);
    };

    const retrieveSelectClasses = classNames({
      "mb-3": !error && isFormItem,
      "retrieve-select-wrapper": true,
      [externalClassName as string]: externalClassName,
    });

    const handleFocus = (event: any) => {
      setIsHighlighted(true);
      // 没值的时候打开， 去掉了&& selectedOptions.length === 0 这个判断
      if (!readOnly && !isOpen) {
        toggleDropdown(); // 键盘tab过来的时候打开下拉框
        setTimeout(() => {
          setShowOptions(true);
        }, 10);
      }
      const position = getAbsolutePosition(
        retrieveSelectWrapperFormControlRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
      retrieveInputRef.current?.focus();
    };

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Tab") {
        // 当下拉项展开的时候进入这个回调，来关闭下拉项
        if (isOpen) {
          toggleDropdown();
        }
        return; // 让焦点移动到下一个表单元素
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex <= 0 ? optionList.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex >= optionList.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        handleSelect(optionList?.[focusedIndex]);
      } else if (event.key === "Escape") {
        setShowOptions(false);
      }
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Tab") {
        retrieveInputRef.current.value = ""; // tab走的时候要清空输入框
        setIsInputFocusing(false); // 记住tab走的时候要吧 isInputFocusing 设置为false
      }
    };

    useEffect(() => {
      let arr: any[] = [];
      if (single) {
        if (defaultValue) {
          if (showDefaultValue) {
            // 如果 defaultValue 是对象，并且 valueKey属性有值，则根据 valueKey 找到对应的 option
            if (
              defaultValue &&
              typeof defaultValue === "object" &&
              defaultValue[valueKey] !== undefined &&
              defaultValue[valueKey] !== null &&
              defaultValue[valueKey] !== 0
            ) {
              setSelectedOptions([defaultValue]);
              setShowSelectedList(true);
              setOptionList((preArr) => {
                return preArr?.map((item) => ({
                  ...item,
                  selected: defaultValue[valueKey] === item[valueKey],
                }));
              });
            } else {
              // 如果 defaultValue没值，则数据置空
              setSelectedOptions([]);
              setOptionList((preArr) => {
                return preArr?.map((item) => ({
                  ...item,
                  selected: false,
                }));
              });
            }
          } else {
            if (typeof defaultValue === "object" && defaultValue[valueKey]) {
              tempOptions.some((option: any) => {
                option[valueKey] === defaultValue[valueKey] && arr.push(option);
                return false;
              });
            } else {
              tempOptions.some((option: any) => {
                option[valueKey] === defaultValue && arr.push(option);
                return false;
              });
            }
            if (arr?.length) {
              setSelectedOptions(arr);
              setShowSelectedList(true);
              setTimeout(() => {
                setOptionList((preArr) => {
                  return preArr?.map((item) => ({
                    ...item,
                    selected: arr.some((i) => i[valueKey] === item[valueKey]),
                  }));
                });
              }, 0);
            } else {
              setSelectedOptions([]);
            }
          }
        } else {
          setOptionList(
            options?.map((item) => {
              item.selected = false;
              return item;
            })
          );
          setSelectedOptions([]);
        }
      } else {
        if (defaultValue?.length) {
          defaultValue?.map((item: any) => {
            tempOptions.some((option: any) => {
              option[valueKey] === item[valueKey] && arr.push(option);
              return false;
            });
            return false;
          });

          if (arr?.length) {
            setSelectedOptions(arr);
            setShowSelectedList(true);
            setTimeout(() => {
              setOptionList((preArr) => {
                return preArr?.map((item) => ({
                  ...item,
                  selected: arr.some((i) => i[valueKey] === item[valueKey]),
                }));
              });
            }, 0);
          }
        } else {
          setOptionList(
            options?.map((item) => {
              item.selected = false;
              return item;
            })
          );
        }
      }
      if (defaultValue) {
        setError(false);
      }
    }, [defaultValue, tempOptions]);

    useEffect(() => {
      if (selectedOptions.length) {
        selectedOptions.forEach((item: any) => {
          judgeOptionsByAttribute(options, item);
        });
      } else {
        setOptionList(options);
      }
      setTempOptions(options);
      // 不应该有这个逻辑
      /* if (!isOpen) {
          toggleDropdown();
        } */
    }, [options]);

    return (
      <div
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        className={retrieveSelectClasses}
        style={{
          width,
          ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
        }}
      >
        <div
          className={`content-box ${
            inputGroup ? "inputGroup" : `label-in-${labelPosition}`
          }`}
        >
          <span
            className={`label-box ${inputGroup ? "input-group-text" : ""}`}
            style={{
              color: labelColor,
              width: labelWidth,
              alignItems: labelPosition === "left-top" ? "start" : "center",
              ...(labelPosition !== "top" && { display: "flex" }),
            }}
          >
            {label}
          </span>
          <div className="retrieve-select-form-content">
            <div
              style={{
                display: "flex",
                flexWrap: single ? "nowrap" : "wrap",
                ...(suffixContentType === "button"
                  ? {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      // borderRight: "none",
                    }
                  : {}),
              }}
              ref={retrieveSelectWrapperFormControlRef}
              tabIndex={0}
              onBlur={handleBlur}
              onClick={handleWrapperClick}
              className={`select-list-box form-control ${
                isHighlighted ? "focus" : ""
              }`}
            >
              <select style={{ display: "none" }} name={name}>
                {showSelected &&
                  showSelectedList &&
                  selectedOptions?.map((option, index) => {
                    return (
                      <option key={index} value={option[valueKey]}></option>
                    );
                  })}{" "}
              </select>

              <div ref={selectListRef} className="select-list">
                {!isInputFocusing &&
                  showSelected &&
                  showSelectedList &&
                  selectedOptions?.map((option, index) => {
                    return (
                      <div
                        style={{
                          ...(single ? { maxWidth: maxSelectedListWidth } : {}),
                        }}
                        className={`${
                          single
                            ? "selected-option-single ellipsis-1"
                            : "selected-option"
                        }`}
                        key={option[valueKey]}
                      >
                        {option[labelKey]}
                        {!single && (
                          <i
                            onClick={() => handleDeleteItem(option)}
                            className="option-icon fa-regular fa-circle-xmark"
                          ></i>
                        )}
                      </div>
                    );
                  })}
              </div>
              <div className="input-control">
                <input
                  onKeyDown={handleInputKeyDown}
                  ref={retrieveInputRef}
                  placeholder={isInputFocusing ? placeholder : ""}
                  onFocus={handleInputFocus}
                  onChange={(e) => handleInputChange(e)}
                  onClick={handleInputClick}
                  readOnly={readOnly}
                  type="text"
                  className="retrieve-input"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="icon-box">
                <i
                  className={`icon text-secondary fa-solid fa-angle-right ${
                    isOpen ? "rotate-up" : "rotate-down"
                  }`}
                ></i>
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
        {ReactDOM.createPortal(
          <div
            ref={contentRef}
            style={{
              width: contentWidth,
              position: "absolute",
              top:
                customSelectContentPosition.y +
                customSelectContentPosition.height +
                "px",
              left: customSelectContentPosition.x + "px",
              maxHeight,
              ...(closing ? { opacity: 0, transform: "scaleY(0)" } : {}),
            }}
            className={`retrieve-select-content ${
              showOptions ? "retrieve-select-content-open" : ""
            }`}
          >
            {!readOnly &&
              isOpen &&
              (optionList?.length > 0 ? (
                optionList?.map((option: any, index: number) => {
                  return (
                    <div
                      key={index}
                      style={{
                        color: option.selected ? activeColor.font : "#000",
                        backgroundColor: option.selected ? activeColor.bgc : "",
                      }}
                      onClick={() => handleSelect(option)}
                      className={`retrieve-select-option ${
                        option.selected && "retrieve-select-option-active"
                      } ${
                        focusedIndex === index &&
                        "retrieve-select-option-focused"
                      }`}
                    >
                      {option[labelKey]}
                    </div>
                  );
                })
              ) : (
                <div className="none-match ps-2 font-italic">No content</div>
              ))}
          </div>,
          document.body
        )}
        {error && required && (
          <div
            className="animate__animated animate__fadeIn mb-1"
            style={{
              color: "#DC3545",
              fontSize: "14px",
              paddingLeft:
                parseInt(labelWidth) > 120
                  ? "120px"
                  : parseFloat(labelWidth) + 20 + "px",
            }}
          >{`${errMsg || `${label}不能为空`}`}</div>
        )}
      </div>
    );
  }
);

export default RetrievrSelect;
