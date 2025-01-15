import { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import getAbsolutePosition from "@site/src/common/utils/getAbsolutePosition";
import useClickOutside from "@site/src/common/hooks/useClickOutside";
import getContentWidth from "@site/src/common/utils/getContentWidth";
import useThrottle from "@site/src/common/hooks/useThrottle";
import isEmptyO from "@site/src/common/utils/isEmptyO";
import IconClose from "@site/src/common/components/icon_close";

export interface SelectProps {
  showIcon?: boolean;
  title?: string;
  backgroundColor?: string;
  mode?: "common" | "liveSearch" | "tags";
  multiple?: boolean;
  showSearch?: boolean;
  prefix?: any;
  suffix?: any;
  varient?: "outlined" | "filled" | "borderless";
  contentWrap?: boolean;
  ellipsis?: boolean;
  compact?: boolean; // 是否紧凑模式？太窄了
  wrapperStyle?: React.CSSProperties;
  wrapperWidth?: any;
  commonSuffixContent?: string;
  clearable?: boolean;
  isAddon?: boolean;
  formStyle?: React.CSSProperties;
  errorPaddingLeft?: any;
  suffixContentExternalCls?: string;
  selectContentExternalCls?: string;
  labelMinWidth?: any;
  noWrap?: boolean;
  shouldFocus?: boolean;
  activeColor?: { font: string; bgc: string };
  returnType?: "str" | "obj";
  showEmpty?: boolean;
  showDefaultValue?: boolean;
  labelKey?: string;
  valueKey?: string;
  showLabel?: boolean;
  suffixContent?: any;
  suffixContentType?: string;
  inline?: boolean;
  isFormItem?: boolean;
  name?: string;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  width?: any;
  label?: any;
  labelPosition?: "left-top" | "center" | "top";
  inputGroup?: boolean;
  labelColor?: string;
  required?: boolean;
  defaultValue?: any;
  options: any[];
  placeholder?: string;
  size?: "sm" | "lg" | "default";
  externalClassName?: string;
  disabled?: boolean;
  transparent?: boolean;
  optionContentMaxHeight?: string;
  onChange?: (e?: any, ...args: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
  onFieldChange?: (name: string, value: any) => void;
  onValidateField?: (name: string, value?: any) => void;
  optionRender?: (option: any, labelKey?: any, valueKey?: any) => void; // 自定义渲染选项
  onInputChange?: (value: string) => void;
  filterOption?: (
    input: string,
    option: any,
    labelKey?: any,
    valueKey?: any
  ) => any | boolean;
}

const Select = React.forwardRef((props: SelectProps, ref) => {
  const {
    showIcon = true,
    title,
    backgroundColor,
    mode = "common",
    multiple,
    showSearch,
    prefix,
    suffix,
    varient = "outlined",
    contentWrap = true,
    ellipsis = true,
    compact,
    wrapperWidth,
    commonSuffixContent,
    size,
    clearable = false,
    isAddon,
    wrapperStyle,
    formStyle,
    errorPaddingLeft,
    suffixContentExternalCls,
    selectContentExternalCls,
    labelMinWidth,
    noWrap = true,
    shouldFocus = false,
    activeColor = { font: "#fff", bgc: "#2783d8" },
    returnType = "obj",
    showDefaultValue = false,
    labelKey = "label",
    valueKey = "value",
    suffixContent,
    showLabel = true,
    suffixContentType,
    inline,
    commonSuffixIcon,
    isFormItem,
    errMsg,
    labelWidth,
    label,
    labelPosition = "center",
    inputGroup = false,
    labelColor,
    required = false,
    showEmpty = true,
    name,
    width,
    defaultValue,
    options,
    placeholder,
    externalClassName,
    disabled,
    transparent,
    optionContentMaxHeight = "200px",
    onChange,
    onFormDataChange,
    onFieldChange,
    onValidateField,
    optionRender,
    onInputChange,
    filterOption,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);
  const [isEnter, setIsEnter] = useState<boolean>(false);
  // 防止多次执行 defaultValue 逻辑
  const [hasUseDefaultValue, sethasUseDefaultValue] = useState<boolean>(false);

  // const { isShow, selectWrapperRef, handleClose } = useClickOutside();
  const [newOptions, setNewOptions] = useState(options || []);
  const [originalOptions, setOriginalOptions] = useState<any>(options || []);
  const [selectValue, setSelectValue] = useState<any>({});
  const [selectValueList, setSelectValueList] = useState<any[]>([]);
  // 暂存上一次选中的数据，防止更换 options 的时候，无法展示上次的数据
  const [tempSelectValue, setTempSelectValue] = useState<any>(
    defaultValue || null
  );
  const [calcMaxHeight, setCalcMaxHeight] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项

  const [selectValueMaxWidth, setSelectValueMaxWidth] = useState<any>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const selectWrapperRef = useRef<any>(null);
  const selectRef = useRef<any>();
  const contentRef = useRef<any>();
  const [customSelectContentPosition, setCustomSelectContentPosition] =
    useState<any>({});

  // RetrieveSelect 逻辑
  const [isInputFocusing, setIsInputFocusing] = useState<boolean>(false);
  const inputRef = useRef<any>();
  const tagInputTemValueRef = useRef<string>("");

  const handleClose = () => {
    if (disabled) return;
    // RetrieveSelect 新增逻辑 失焦后，展示 select-value
    if (mode !== "liveSearch" && !showSearch) {
      setIsInputFocusing(false);
    }
    if (mode === "common" && inputRef.current) {
      if (showSearch) {
        // 如果是 需要搜索框，则 input 的值不变，仍然是 选中的值
        inputRef.current.value = selectValue?.[labelKey] || "";
      } else {
        inputRef.current.value = "";
      }
    } else if (mode === "liveSearch") {
      setSelectValue(inputRef.current?.value); // 搜索框失去焦点时，将输入框的值赋给 selectValue
    } else if (mode === "tags") {
      handleTagsChange(inputRef.current?.value);
    }
    if (varient === "filled" && selectRef.current) {
      selectRef.current.style.backgroundColor = "#f0f0f0";
    }
    if (isShow) {
      // 打开后的关闭再去校验有没有值
      if (multiple) {
        handleValidate(selectValueList);
      } else {
        if (mode === "common") {
          handleValidate(selectValue?.[valueKey] || selectValue?.[labelKey]);
        } else if (mode === "liveSearch") {
          handleValidate(
            selectValue?.[valueKey] ||
              selectValue?.[labelKey] ||
              inputRef.current.value
          );
        }
      }
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setIsShow((prev: boolean) => !prev);
      }, 100);
      setIsEnter(false);
    } else {
      setIsShow(false);
    }
    if (isFocus) {
      setIsFocus(false);
    }
  };

  const handleFieldChange = (value: any) => {
    onFieldChange && onFieldChange(name!, value);
  };

  const handleValidate = (data?: any) => {
    onValidateField && onValidateField(name!, data);
  };

  const calcContentPosition = () => {
    const position = getAbsolutePosition(selectRef.current, 0, 0);
    const viewportHeight = window.innerHeight;
    if (!selectRef.current) return;
    const rect = selectRef.current.getBoundingClientRect();
    const distanceToBottom = viewportHeight - rect.bottom;
    // 如果 距离底部小于内容高度，则向上弹出
    if (distanceToBottom < contentRef.current?.clientHeight) {
      position.y =
        position.y - contentRef.current?.clientHeight - position.height;
    }
    setCustomSelectContentPosition(position);
  };

  const handleFormContentClick = (e: any) => {
    // 打开的时候，如果输入框没有输入，代表过滤条件为空，则直接把列表置为最初的列表，即不做任何过滤
    if (inputRef.current && !inputRef.current.value) {
      setNewOptions(originalOptions);
    }
    e.stopPropagation();
    if (!showSearch && mode !== "liveSearch") {
      setTimeout(() => {
        calcContentPosition(); // 不在这里计算，否则会出现抖动，在 列表变化 或者 focus 的时候计算
      }, 10);
    }
    if (disabled) {
      return; // 如果是禁用状态，则不执行下面的逻辑
    } else if (!showSearch) {
      // 如果是普通的单选模式，那要直接打开--新增如果是 tags 模式，则不打开下拉框来选择(因为会把输入框输入的值也添加到数组里面去)
      setIsShow(true);
      // 把下面的判断提炼出来
    } else if (isInputFocusing) {
      // 这边的判断好像都可以不要了？
      /*  if (mode === 'common') {
                if (!selectValue?.[valueKey]) {
                    setIsShow(true);
                    // 要给的 定时器，这样才能正确取到 contentRef的高度，否则为0
                    setTimeout(() => {
                        calcContentPosition();
                    }, 10);
                }
            } else if (mode === 'liveSearch') {
                debugger;
                // isEmptyO(selectValue) 这个判断是为了防止 defaultValue 判断为空导致 selectValue是空对象的情况
                if (!selectValue || isEmptyO(selectValue)) {
                    setIsShow(true);
                    // 要给的 定时器，这样才能正确取到 contentRef的高度，否则为0
                    setTimeout(() => {
                        calcContentPosition();
                    }, 10);
                }
            } else if (mode === 'tags') {
                if (!selectValue || isEmptyO(selectValue)) {
                    // setIsShow(true); --新增如果是 tags 模式，则不打开下拉框来选择(因为会把输入框输入的值也添加到数组里面去)
                    // 要给的 定时器，这样才能正确取到 contentRef的高度，否则为0
                    setTimeout(() => {
                        calcContentPosition();
                    }, 10);
                }
                // setIsShow(false); // 新增如果是 tags 模式，则不打开下拉框来选择(因为会把输入框输入的值也添加到数组里面去)
            } else if (multiple) {
                if (!selectValue || isEmptyO(selectValue)) {
                    setIsShow(true);
                    // 要给的 定时器，这样才能正确取到 contentRef的高度，否则为0
                    setTimeout(() => {
                        calcContentPosition();
                    }, 10);
                }
            } */
    }
  };

  // 标签变化
  const handleTagsChange = (value: any) => {
    // tags 模式就是只有 value，没有 label
    const tempSelectValueList = [...(selectValueList || [])];
    if (value) {
      if (
        tempSelectValueList.find((item) => {
          if (typeof item === "string") {
            return item === value;
          } else {
            return item[valueKey] === value;
          }
        })
      ) {
        return;
      } else {
        tempSelectValueList.push(value);
        // tempSelectValueList.push(value);
        setSelectValueList(tempSelectValueList);
        inputRef.current.value = "";
      }
    }
    handleValidate(tempSelectValueList);
    onFieldChange && onFieldChange(name!, tempSelectValueList);
    tagInputTemValueRef.current = "";
  };

  // 标签输入框变化
  const handleTagsInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (e.key === "Enter" && !isShow) {
      if (value) {
        handleTagsChange(value);
        e.preventDefault();
      }
    }
  };

  const handleSelect = (item: any, e?: React.MouseEvent) => {
    e?.stopPropagation();
    // 要做个中间量，不然给 form 的的数据会慢一拍
    let newSelectValueList = [...selectValueList];
    if (multiple || mode === "tags") {
      const index = selectValueList.findIndex(
        (option: any) => option[valueKey] === item[valueKey]
      );
      if (index > -1) {
        newSelectValueList = newSelectValueList.filter(
          (option: any) => option[valueKey] !== item[valueKey]
        );
        setSelectValueList(newSelectValueList);
      } else {
        newSelectValueList.push(item);
        setSelectValueList(newSelectValueList);
      }
      // 选择完之后，将 input 的值清空
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      setSelectValue(item);
      setTempSelectValue(item);
      if (mode === "liveSearch") {
        inputRef.current.value = item[labelKey];
      }
      handleClose();
    }
    // 多选和单选，返回的结果要分开
    const returnValue =
      multiple || mode === "tags"
        ? newSelectValueList
        : returnType === "obj" || showDefaultValue
        ? item
        : item[valueKey];
    onChange && onChange(returnValue);
    setError(false);
    // 新增onFormDataChange来修改外部传入的数据
    onFormDataChange && onFormDataChange(name!, returnValue);
    handleFieldChange && handleFieldChange(returnValue);

    setError(false);
    handleValidate(item);
  };

  const getValue = () => {
    // 不能加这个逻辑，这样会导致手动选择另外的选项，返回的还是 defaultValue
    /* if (showDefaultValue) {
              return defaultValue;
            } */

    if (
      selectValue?.[valueKey] ||
      selectValue?.[valueKey] === 0 ||
      selectValue?.[valueKey] === false
    ) {
      // 感觉可有可无
      if (returnType === "obj") {
        onFormDataChange && onFormDataChange(name!, selectValue);
        handleFieldChange && handleFieldChange(selectValue);
      } else {
        onFormDataChange &&
          onFormDataChange(
            name!,
            selectValue[valueKey] || selectValue[labelKey]
          );
        handleFieldChange &&
          handleFieldChange(selectValue[valueKey] || selectValue[labelKey]);
      }
      return selectValue[valueKey] || selectValue[labelKey];
    } else {
      return selectValue;
    }
  };

  const [error, setError] = useState<boolean>(false);
  const validate = () => {
    if (!required) return true;

    if (selectValue) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const clear = () => {
    if (multiple) {
      setSelectValueList([]);
    } else {
      setSelectValue("");
      setTempSelectValue("");
    }
  };

  const handleClickCommonSuffixIcon = () => {};

  const handleClearIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    clear();
    setError(true);
    handleFieldChange?.(multiple ? [] : returnType === "str" ? "" : {});
    handleValidate("");
  };

  // 判断 input 的背景色
  const judgeInputBgColor = () => {
    if (disabled) {
      return "#eee";
    } else if (varient === "filled" || transparent) {
      return "transparent";
    } else if (backgroundColor) {
      return backgroundColor;
    } else {
      return "transparent";
    }
  };

  // 判断是否是选中状态来决定选项的字体颜色
  const judgeColor = (item: any, type: "font" | "bgc") => {
    if (multiple || mode === "tags") {
      return selectValueList?.find(
        (option: any) => option[valueKey] === item[valueKey]
      )
        ? activeColor?.[type]
        : type === "font"
        ? "#000"
        : "";
    } else {
      return selectValue?.[valueKey] === item[valueKey]
        ? activeColor?.[type]
        : type === "font"
        ? "#000"
        : "";
    }
  };

  // 多选的情况下，删除选项
  const handleRemoveSelectValueListItem = (
    e: React.MouseEvent<HTMLDivElement>,
    item: any,
    index: number
  ) => {
    e.stopPropagation();
    const newSelectValueList = [...selectValueList];
    newSelectValueList.splice(index, 1);
    /* if (selectValueList.length === 1) {
            handleValidate([]); // 清除最后一项的时候，也要触发校验
        } */
    handleFieldChange(newSelectValueList);
    handleValidate(newSelectValueList);
    setSelectValueList(newSelectValueList);
  };

  useImperativeHandle(ref, () => ({
    validate,
    clear,
    getValue,
  }));

  const wrapperClassName = `adou-select-wrapper ${
    externalClassName || ""
  }`.trim();

  // 全部都 通过 KeyDown来关闭下拉列表项
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab") {
      // 当下拉项展开的时候进入这个回调，来关闭下拉项
      if (isShow) {
        handleClose();
      }
      return; // 让焦点移动到下一个表单元素
    } else if (isShow) {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex <= 0 ? newOptions.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex >= newOptions.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "Enter") {
        handleClose();
        if (focusedIndex == -1) return;
        event.preventDefault();
        handleSelect(newOptions[focusedIndex]);
      }
    }
  };

  // 全部都 通过 focus来展开下拉列表项
  const handleFocus = (e: any) => {
    if (disabled) return;
    e.stopPropagation();
    if (varient === "filled" && selectRef.current && !disabled) {
      selectRef.current.style.backgroundColor = "";
    }
    setIsFocus(true);

    if (!shouldFocus) return;
    calcContentPosition();
    handleClose();
  };

  const handleMouseEnter = () => {
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  // 计算所取到的值能展示的最大宽度
  const getMaxSelectValueWidth = () => {
    const selectWidth = getContentWidth(selectRef.current);

    if (!selectWidth) return;
    const cliearIconBoxWidth = document.querySelector(
      ".adou-select-clear-icon-box"
    )?.clientWidth;
    const adouSelectIconBoxWidth = document.querySelector(
      ".adou-select-icon-box"
    )?.clientWidth;

    // 这里多减去 8px 防止凸出来
    setSelectValueMaxWidth(
      selectWidth -
        (cliearIconBoxWidth || 0) -
        (adouSelectIconBoxWidth || 0) -
        8 +
        "px"
    );
  };

  const handleInputFocus = (e: any) => {
    // 如果是 带输入框(过滤) 并且不是多选 逻辑
    if (showSearch && inputRef.current && !multiple) {
      setIsInputFocusing(true);
      inputRef.current?.focus();
      // 如果有值
      if (!isEmptyO(selectValue)) {
        if (mode === "common") {
          if (typeof selectValue === "object") {
            inputRef.current.value = selectValue[labelKey];
          } else {
            inputRef.current.value = selectValue;
          }
        }
        inputRef.current?.select();
      } else {
        // 没值，则展示下拉列表
        setIsShow(true);
      }
    } else if (multiple || mode === "tags") {
      setIsInputFocusing(true);
    } else if (mode === "liveSearch") {
      setIsInputFocusing(true);
      if (selectValue && !isEmptyO(selectValue)) {
        inputRef.current.value = selectValue?.[labelKey] || selectValue;
      }
      // inputRef.current?.focus();
    }
    setTimeout(() => {
      calcContentPosition();
    }, 10);
  };

  const handleTagsInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!isShow) {
      handleTagsChange(tagInputTemValueRef.current);
    }
  };

  const _onInputChange = useThrottle((value: string) => {
    onInputChange && onInputChange(value);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // debugger;
    e.stopPropagation();
    const value = e.target.value;
    if (mode !== "tags") {
      // 由于无法做到 点击选项导致的失焦后 不将输入框的值添加到数组中，所以这里做判断
      setIsShow(true);
    }
    if (mode === "liveSearch") {
      handleFieldChange(value);
    }
    if (!onInputChange) {
      // 如果不需要检索，则直接做过滤
      const filteredOptions = originalOptions.filter((item: any) => {
        return filterOption
          ? filterOption(value, item, labelKey, valueKey)
          : String(item[labelKey]).toLowerCase().includes(value.toLowerCase());
      });
      setNewOptions(filteredOptions);
    } else {
      // _onInputChange(value); // 不知道为什么使用节流会导致 form 的数据被清空。。。
      onInputChange && onInputChange(value);
    }
    if (mode === "tags") {
      tagInputTemValueRef.current = value;
    }
  };

  useEffect(() => {
    /* if (name === "tcm_usage_id") {
        console.log("defaultValue: ", name, defaultValue);
        console.log("---------------------------------: ", options);
        debugger;
      } */
    // 新增：如果使用过 defaultValue，就不再执行下面的逻辑
    // if (hasUseDefaultValue) return;
    if (defaultValue) {
      // 如果有值，则自动做校验，防止一开始没值出现空提示，后面切换了有值还是出现空提示的错误
      setError(false);
      sethasUseDefaultValue(true);

      // 如果是必须展示默认值，不通过列表匹配的话，进入这个判断
      // 如果是 LiveSearch 的话，也要把传进来的 defaultValue 赋值给 selectValue
      // 为了防止 showSearch 的时候 input框 的值被清空，这边要加上 showSearch 的判断
      if (showDefaultValue || showSearch || mode === "liveSearch") {
        if (multiple) {
          setSelectValueList(defaultValue);
        } else {
          // 如果是字符串，则通过 options 匹配
          if (typeof defaultValue !== "object") {
            // 为了兼容 showSearch 的逻辑，这里需要单独处理，如果找到 selectOption，则赋值给 selectValue
            let selectOption = options.find(
              (option) => option?.[valueKey] === defaultValue
            );
            if (!selectOption) {
              // 没找到，则直接赋值
              selectOption = {
                [valueKey]: defaultValue,
                [labelKey]: defaultValue,
              };
            }
            setSelectValue(selectOption);
            setTempSelectValue(selectOption);
          } else if (typeof defaultValue === "object") {
            // console.log("-------------------------------: ", defaultValue);
            setSelectValue(defaultValue);
            setTempSelectValue(defaultValue);
          }
        }
      } else {
        if (multiple) {
          const selectOption = options.filter((option: any) => {
            if (Array.isArray(defaultValue)) {
              return defaultValue.some((value: any) => {
                const matchValue =
                  typeof value === "object" ? value[valueKey] : value;
                return option[valueKey] === matchValue;
              });
            } else {
              return option[valueKey] === defaultValue;
            }
          });
          setSelectValueList(selectOption);
        } else if (mode === "tags") {
          // 如果是 tags 模式，单独处理
          if (defaultValue) {
            setSelectValueList(
              Array.isArray(defaultValue)
                ? defaultValue.map((item: any) => {
                    if (typeof item === "object") {
                      return item;
                    } else {
                      return { [valueKey]: item, [labelKey]: item };
                    }
                  })
                : typeof defaultValue === "object"
                ? [defaultValue]
                : [{ [valueKey]: defaultValue, [labelKey]: defaultValue }]
            );
          } else {
            setSelectValueList([]);
          }
        } else {
          if (typeof defaultValue === "object") {
            const selectOption = options.find(
              (option) => option?.[valueKey] === defaultValue?.[valueKey]
            );
            // 如果找到匹配项，则设置选中项
            if (selectOption) {
              setSelectValue(selectOption);
              setTempSelectValue(selectOption);
            } else {
              // 如果没有找到匹配项，则不设置选中项
              setSelectValue({});
              // setTempSelectValue({});
            }
          } else {
            /* if (name === "pharmacy_id") {
                console.log("defaultValue: ", name, defaultValue);
                // debugger;
              } */
            if (defaultValue || defaultValue === 0 || defaultValue === false) {
              const selectOption = options.find(
                (option) => option[valueKey] === defaultValue
              );
              setSelectValue(selectOption);
            } else {
              setSelectValue(tempSelectValue);
            }
          }
        }
      }
    } else {
      setSelectValue("");
      setTempSelectValue("");
      setSelectValueList([]);
    }
    setTimeout(() => {
      getMaxSelectValueWidth();
    }, 100);
  }, [defaultValue, options]);

  useEffect(() => {
    if (showEmpty) {
      if (options) {
        const enhancedOptions = [...options];
        setNewOptions(enhancedOptions);
        setOriginalOptions(enhancedOptions);
      }
    } else {
      setNewOptions(options);
      setOriginalOptions(options);
    }
  }, [options]);

  useEffect(() => {
    setCalcMaxHeight(newOptions.length * 34 || 100);
    // 必须要给个 0ms的延迟，不然高度还是为 0，并且延迟不能太久，不然会出现上下跳的情况
    setTimeout(() => {
      calcContentPosition();
    }, 0);
  }, [newOptions]);

  useEffect(() => {
    if (!isShow) {
      setFocusedIndex(-1); // 重置聚焦索引
    }
  }, [isShow]);

  // 因为现在只有在 第一次 的时候展示 select-value的div，后面都是展示 input，所以这边做了赋值处理，保证 input的值能够实时更新
  useEffect(() => {
    /* if (valueKey === "item_id") {
        debugger;
        console.log("selectValue: ", selectValue);
      } */
    if (
      // 下面这些情况不用在意 input 的值
      !inputRef.current ||
      (!isInputFocusing && !showSearch && mode !== "liveSearch") ||
      !selectValue
    ) {
      if (inputRef.current) {
        inputRef.current.value = ""; // 如果 selectValue 没值，则 有input 的话， input 的值也要清空
      }
      return;
    }
    if (typeof selectValue === "object") {
      if (!selectValue?.[valueKey]) {
        inputRef.current.value = "";
      } else {
        inputRef.current.value = selectValue[labelKey];
      }
    } else {
      inputRef.current.value = selectValue;
    }
  }, [selectValue]);

  // 为了做 聚焦高亮，只能把第三个参数写为 true，本来是 contentRef.current && isShow
  useClickOutside(
    [selectRef, contentRef, inputRef],
    handleClose,
    contentRef.current && selectRef.current && isShow
  );

  return (
    <div
      title={title || label}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={selectWrapperRef}
      className={`${wrapperClassName} `}
      style={{
        ...wrapperStyle,
        ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
      }}
    >
      {/* {name === "dosage_quantity" && JSON.stringify(selectValue[valueKey])} */}
      <div className="adou-select-form-content">
        <div
          ref={selectRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleFormContentClick}
          className={`adou-select d-flex align-items-center ${
            selectContentExternalCls || ""
          } ${isFocus ? "adou-form-control-focus" : ""}`}
          style={{
            textAlign: "left",
            background: disabled
              ? "#eee"
              : transparent
              ? "transparent"
              : backgroundColor
              ? backgroundColor
              : varient === "filled"
              ? "#f0f0f0"
              : "",
            flex: 1,
            /* ...(suffixContentType === 'button'
                            ? {
                                  borderTopRightRadius: 0,
                                  borderBottomRightRadius: 0,
                                  // borderRight: "none",
                              }
                            : {}), */
            minHeight:
              size === "lg" ? "48px" : size === "sm" ? "33.6px" : "41.6px",
            border: varient === "borderless" ? "none" : "",
            cursor: disabled ? "not-allowed" : "pointer",
            ...formStyle,
          }}
        >
          {prefix && <div className="prefix me-2">{prefix}</div>}
          {/* 多选 或者是 tags模式 */}
          {multiple || mode === "tags" ? (
            <div className="adou-select-value-list d-flex flex-wrap align-items-center flex-fill">
              {selectValueList?.map((item: any, index: number) => (
                <div
                  style={{ backgroundColor: "rgb(0 0 0 / 6%)" }}
                  className="adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1"
                  key={index}
                >
                  <span className="adou-select-value-list-item-text me-1">
                    {typeof item === "object" ? item[labelKey] : item}
                  </span>
                  {!disabled && (
                    <span
                      className="adou-select-value-list-item-close"
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleRemoveSelectValueListItem(e, item, index)
                      }
                    >
                      <IconClose />
                    </span>
                  )}
                </div>
              ))}
              {/* 需要输入或者模式为 tags 的时候，就要展示 输入框 */}
              {(showSearch || filterOption || mode === "tags") && (
                <div className={`adou-select-input-box flex-fill`}>
                  <input
                    onKeyDown={handleTagsInputKeyDown}
                    onBlur={handleTagsInputBlur}
                    placeholder={selectValue?.[valueKey] ? "" : placeholder}
                    onFocus={handleInputFocus}
                    ref={inputRef}
                    // placeholder={isInputFocusing || !selectedOptions.length ? placeholder : ''}
                    // onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    // onClick={handleInputClick}
                    disabled={disabled}
                    type="text"
                    className="adou-select-input"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{
                      backgroundColor: judgeInputBgColor(),
                      width: "100%",
                      cursor: disabled ? "not-allowed" : "",
                    }}
                  />
                </div>
              )}
            </div>
          ) : selectValue?.[valueKey] ||
            selectValue?.[valueKey] === 0 ||
            selectValue?.[valueKey] === false ? (
            ellipsis ? (
              (!isInputFocusing || multiple) &&
              !showSearch &&
              mode !== "liveSearch" ? (
                <div
                  title={selectValue[labelKey] || selectValue}
                  className={`adou-select-value ${
                    contentWrap ? "ellipsis-1" : ""
                  }`} // ellipsis-1 加上这个，选择框会自动变大或者变小
                  style={{
                    maxWidth: selectValueMaxWidth, // 设置最大宽度来支持 ellipsis
                    ...(!showSearch && !filterOption ? { flex: 1 } : {}),
                  }}
                >
                  {selectValue[labelKey]}
                </div>
              ) : (
                ""
              )
            ) : (
              <div
                className={`adou-select-value  ${
                  contentWrap ? "ellipsis-1" : ""
                }`}
                style={{ ...(showSearch ? { flex: 1 } : { flex: 1 }) }}
              >
                {selectValue[labelKey]}
              </div>
            )
          ) : (
            mode !== "liveSearch" &&
            !showSearch &&
            !filterOption && (
              <div className="select-value-empty-placeholder flex-fill"></div>
            )
          )}
          {(showSearch || filterOption || mode === "liveSearch") &&
            !multiple &&
            mode !== "tags" && (
              <div
                className="adou-select-input-box flex-fill"
                title={selectValue?.[labelKey] || selectValue}
              >
                <input
                  placeholder={selectValue?.[valueKey] ? "" : placeholder}
                  onFocus={handleInputFocus}
                  ref={inputRef}
                  // placeholder={isInputFocusing || !selectedOptions.length ? placeholder : ''}
                  // onFocus={handleInputFocus}
                  onChange={handleInputChange}
                  // onClick={handleInputClick}
                  disabled={disabled}
                  type="text"
                  className="adou-select-input ellipsis-1"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    backgroundColor: judgeInputBgColor(),
                    width: "100%",

                    cursor: disabled ? "not-allowed" : "",
                  }}
                />
              </div>
            )}
          {suffix && <div className="suffix ms-2">{suffix}</div>}
          {clearable &&
          isEnter &&
          (multiple
            ? selectValueList.length
            : selectValue?.[valueKey || labelKey]) ? (
            <div className="adou-select-clear-icon-box fade-enter d-flex">
              <i
                className="adou-select-clear-icon fa-regular fa-circle-xmark text-secondary"
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={handleClearIconClick}
              ></i>
            </div>
          ) : (
            <div
              className="adou-select-common-sufiix-content text-secondary"
              style={{ textAlign: "right", whiteSpace: "nowrap" }}
            >
              {commonSuffixContent}
            </div>
          )}
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} adou-select-common-suffix-icon`}
            ></i>
          )}
          <div
            className={`adou-select-icon-box ms-2 ${
              !showSearch && !selectValue?.[valueKey] && !commonSuffixContent
                ? "text-end" // 去掉 flex-fill
                : ""
            }`}
          >
            {showIcon && (
              <i
                style={{ color: labelColor, right: isAddon ? "0px" : "14px" }}
                className={`adou-select-icon fa-solid fa-caret-right ${
                  isShow ? "rotate-up" : "rotate-down"
                }`}
              ></i>
            )}
          </div>
        </div>
        {/* {suffixContent && (
                      <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'suffix-content-text-wrapper ms-2'} ${suffixContentExternalCls || ''}`}>
                          {suffixContent}
                      </div>
                  )} */}
      </div>
      {ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top:
              customSelectContentPosition.y +
              customSelectContentPosition.height +
              "px",
            left: customSelectContentPosition.x + "px",
            ...(isShow
              ? {
                  maxHeight:
                    calcMaxHeight > parseInt(optionContentMaxHeight!)
                      ? optionContentMaxHeight
                      : calcMaxHeight + "px",
                }
              : {}),
            ...(closing ? { opacity: 0, transform: "scaleY(0)" } : {}),
          }}
          ref={contentRef}
          className={`adou-select-option-content ${
            isShow ? "adou-select-option-content-open" : ""
          } ${closing ? "aduo-select-option-content-closing" : ""}`}
        >
          {isShow && (
            <div className={`adou-select-option-box`}>
              {newOptions.length > 0 ? (
                newOptions.map((item, index) => (
                  <div
                    onClick={(e) => handleSelect(item, e)}
                    style={{
                      color: judgeColor(item, "font"),
                      backgroundColor: judgeColor(item, "bgc"),
                    }}
                    className={`adou-select-option ${
                      selectValue?.[valueKey] === item[valueKey]
                        ? "adou-select-option-active"
                        : ""
                    } ${focusedIndex === index ? "focused" : ""}`}
                    key={item[valueKey]}
                  >
                    {optionRender
                      ? optionRender(item, labelKey, valueKey)
                      : item.render
                      ? item.render(item, labelKey, valueKey)
                      : item[labelKey]}
                  </div>
                ))
              ) : (
                <div className="none-match ps-2">No content</div>
              )}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
