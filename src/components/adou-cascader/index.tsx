import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./index.scss"; // 引入样式文件
import useClickOutside from "../../hooks/useClickOutside";
import ReactDOM from "react-dom";
import getAbsolutePositionOfStage from "../../utils/getAbsolutePosition";

interface CascaderProps {
  width?: any;
  inline?: boolean;
  activeColor?: { font: string; bgc: string };
  returnType?: string;
  required?: boolean;
  name?: string;
  label?: any;
  errMsg?: string;
  isFormItem?: boolean;
  labelColor?: string;
  showLabel?: boolean;
  labelWidth?: any;
  labelPosition?: "center" | "left-top" | "top";
  clearable?: boolean;
  valueKey?: string;
  labelKey?: string;
  filterable?: boolean;
  options: any;
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  onFormDataChange?: (key: string, value: any) => void;
}

const Cascader = forwardRef(
  (
    {
      width,
      inline,
      activeColor = { font: "#fff", bgc: "#2783d8" },
      returnType,
      required,
      name,
      label,
      errMsg,
      isFormItem = true,
      labelColor,
      showLabel = true,
      labelWidth = "50px",
      labelPosition = "center",
      clearable = true,
      valueKey = "value",
      labelKey = "label",
      filterable = true,
      options,
      defaultValue,
      onChange,
      onFormDataChange,
    }: CascaderProps,
    ref
  ) => {
    const [selectedValues, setSelectedValues] = useState<any>(defaultValue);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    //为了消失的时候有动画展示
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // 存储展示的数据
    const [data1, setData1] = useState<any[]>([]);
    const [data2, setData2] = useState<any[]>([]);
    const [data3, setData3] = useState<any[]>([]);

    // 为了显示动画
    const [showData2, setShowData2] = useState<boolean>(false);
    const [showData3, setShowData3] = useState<boolean>(false);

    // 记录选中的值
    const [firstSelectData, setfirstSelectData] = useState<any>({});
    const [secondSelectData, setSecondSelectData] = useState<any>({});
    const [thirdSelectData, setThirdSelectData] = useState<any>({});

    // 是否可清除
    const [showClearIcon, setShowClearIcon] = useState<boolean>(false);

    const [error, setError] = useState<boolean>(false);

    const cascaderWrapperRef = useRef<any>(null);
    const optionRef = useRef<any>(null);
    const [customSelectContentPosition, setCustomSelectContentPosition] =
      useState<any>({});

    useEffect(() => {
      setSelectedValues(defaultValue);
    }, [defaultValue]);

    const handleChange = (e: any, type: number, item: any) => {
      e.stopPropagation(); // 阻止冒泡，不然会传递给 handleWrapperClick函数
      setIsFocused(true);

      switch (type) {
        case 1:
          convertData2(item);
          setShowData3(false);
          setTimeout(() => {
            setShowData2(true);
          }, 100);
          setTimeout(() => {
            setData3([]);
          }, 300);
          setShowData3(false);
          setfirstSelectData(item);
          setSecondSelectData({});
          setThirdSelectData({});

          break;
        case 2:
          convertData3(item);
          setTimeout(() => {
            setShowData3(true);
          }, 100);
          setSecondSelectData(item);
          setThirdSelectData({});
          break;
        case 3:
          setThirdSelectData(item);
          if (returnType === "obj") {
            onFormDataChange &&
              onFormDataChange(name!, [
                firstSelectData,
                secondSelectData,
                item,
              ]);
          } else {
            onFormDataChange &&
              onFormDataChange(name!, [
                firstSelectData[valueKey],
                secondSelectData[valueKey],
                item[valueKey],
              ]);
          }
          setTimeout(() => {
            setError(false);
          }, 10);
          setTimeout(() => {
            setShowClearIcon(false);
          }, 100); // 选择完就不展示清除的图标了，注意需要给定时器，不然图标会翻转一下
          break;
        default:
          break;
      }
      if (!item.children?.length) {
        handleClose();
      }
    };

    const handleWrapperClick = () => {
      setIsFocused(true);
      setIsShow(true);
      setIsOpen(true);
      const position = getAbsolutePositionOfStage(
        cascaderWrapperRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
    };

    const handleEnterWrapper = () => {
      if (clearable && thirdSelectData[valueKey]) {
        setShowClearIcon(true);
      }
    };
    const handleLeaveWrapper = () => {
      setShowClearIcon(false);
    };

    const handleClear = (e?: any) => {
      e?.stopPropagation();
      setfirstSelectData({});
      setSecondSelectData({});
      setThirdSelectData({});
      setIsOpen(false);
      //为了消失的时候有动画展示，所以 新增一个状态并且 延迟执行
      setTimeout(() => {
        // 整体的动画
        setIsFocused(false);
        setIsShow(false);

        // 清除列表数据
        setData2([]);
        setShowData2(false);
        setData3([]);
        setShowData3(false);
      }, 100);
      onFormDataChange && onFormDataChange(name!, []);
      setError(true);
    };

    const convertData2 = (options: any) => {
      setData2(options.children || []);
    };
    const convertData3 = (options: any) => {
      setData3(options.children || []);
    };

    const convertData1 = (options: any[]) => {
      options.forEach((item: any) => {
        setData1((preData: any) => [...preData, item]);
      });
    };

    const handleClose = () => {
      setIsOpen(false);
      //为了消失的时候有动画展示，所以 新增一个状态并且 延迟执行
      setTimeout(() => {
        setIsFocused(false);
        setIsShow(false);
      }, 100);
      validate();
    };

    useImperativeHandle(ref, () => ({
      validate,
      clear,
    }));

    const validate = () => {
      if (!required) return true;

      if (thirdSelectData?.[valueKey]) {
        setError(false);
        return true;
      } else {
        setError(true);
        return false;
      }
    };

    const clear = () => {
      handleClear();
    };

    useEffect(() => {
      convertData1(options);
    }, [options]);

    // 默认值的逻辑
    useEffect(() => {
      if (defaultValue?.length) {
        // 先在外边定义数据，以备在第二个和第三个默认值的转换中使用
        let firstItem: any;
        let secondItem: any;
        let thirdItem: any;
        defaultValue.forEach((item: any, index: number) => {
          switch (index) {
            case 0:
              firstItem = data1.find(
                (dataItem: any) => dataItem[valueKey] === item
              );
              if (firstItem) {
                setfirstSelectData(firstItem);
              }
              break;
            case 1:
              // 直接使用第一个默认值找到的children来使用
              secondItem = firstItem?.children.find(
                (dataItem: any) => dataItem[valueKey] === item
              );
              if (secondItem) {
                convertData2(firstItem); // 这步不能省略，不然data2就是空数剧
                setShowData2(true);
                setSecondSelectData(secondItem);
              }
              break;
            case 2:
              // 直接使用第二个默认值找到的children来使用
              thirdItem = secondItem?.children.find(
                (dataItem: any) => dataItem[valueKey] === item
              );
              if (thirdItem) {
                convertData3(secondItem); // 这步不能省略，不然data3就是空数剧
                setShowData3(true);
                setThirdSelectData(thirdItem);
              }
              break;
            default:
              break;
          }
        });
      }
      if (defaultValue) {
        setError(false);
      }
    }, [defaultValue]);

    useClickOutside(
      [cascaderWrapperRef, optionRef],
      handleClose,
      cascaderWrapperRef.current && isFocused
    );

    return (
      <div
        className={`cascader-wrapper ${isFormItem ? "mb-3" : ""}`}
        style={{
          ...(inline ? { marginRight: "15px" } : ""),
          width,
          ...(inline && !width ? { flex: 1 } : {}),
        }}
      >
        <div className={`left  label-in-${labelPosition}`}>
          {showLabel && (
            <div
              className="label-box"
              style={{ width: labelWidth, color: labelColor }}
            >
              {label}
            </div>
          )}
          <div className="content">
            <div
              onMouseEnter={handleEnterWrapper}
              onMouseLeave={handleLeaveWrapper}
              ref={cascaderWrapperRef}
              onClick={handleWrapperClick}
              className={`cascader-content rounded ${isFocused ? "focus" : ""}`}
              tabIndex={0}
            >
              <div className="left">
                <div className={`select-data-box`}>
                  {firstSelectData?.[valueKey] && (
                    <div className="fist-select-data select-data">
                      <div className="text">{firstSelectData?.[labelKey]}</div>
                      {secondSelectData?.[valueKey] && (
                        <div className="separator">
                          <i className="fa-solid fa-angles-right"></i>
                        </div>
                      )}
                    </div>
                  )}

                  {secondSelectData?.[valueKey] && (
                    <div className="second-select-data select-data">
                      <div className="text">{secondSelectData?.[labelKey]}</div>
                      {thirdSelectData?.[valueKey] && (
                        <div className="separator">
                          <i className="fa-solid fa-angles-right"></i>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="third-select-data select-data">
                    {thirdSelectData?.[labelKey]}
                  </div>
                </div>
                {filterable && (
                  <div className="input-box">
                    <input className="input" />
                  </div>
                )}
              </div>
              <div className="right">
                <div className="opt-box">
                  {showClearIcon ? (
                    <i
                      onClick={handleClear}
                      className="clear-icon fa-regular fa-circle-xmark"
                    ></i>
                  ) : (
                    <i
                      className={`opt-icon fa-solid fa-chevron-right ${
                        isFocused ? "focus" : ""
                      }`}
                    ></i>
                  )}
                </div>
              </div>

              {ReactDOM.createPortal(
                <div
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    // 阻止默认行为（如果有的话）
                    e.preventDefault();
                  }}
                  style={{
                    position: "absolute",
                    top:
                      customSelectContentPosition.y +
                      customSelectContentPosition.height +
                      15 +
                      "px",
                    left: customSelectContentPosition.x + "px",
                    ...(isShow
                      ? {
                          /* maxHeight: calcMaxHeight > parseInt(maxHeight!) ? maxHeight : calcMaxHeight + 'px', */
                        }
                      : {}),
                  }}
                  className={`cascader-option-box ${
                    isOpen ? "cascader-option-box-open" : ""
                  }`}
                >
                  {isShow && (
                    <div ref={optionRef} className={`cascader-option-content`}>
                      {data1.length > 0 ? (
                        <div className="data1-box">
                          <div className="filter-area"></div>
                          {data1.map((item: any, index: number) => (
                            <div
                              key={index}
                              className={`cascader-option ${
                                firstSelectData[valueKey] === item[valueKey]
                                  ? "cascader-option-active"
                                  : ""
                              }`}
                              onClick={(e) => handleChange(e, 1, item)}
                              style={{
                                color:
                                  firstSelectData?.[valueKey] === item[valueKey]
                                    ? activeColor.font
                                    : "#000",
                                backgroundColor:
                                  firstSelectData?.[valueKey] === item[valueKey]
                                    ? activeColor.bgc
                                    : "",
                              }}
                            >
                              <div className="text">{item[labelKey]}</div>
                              {item.children?.length > 0 && (
                                <div className="more-icon">
                                  <i className="fa-solid fa-chevron-right"></i>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="none-match ps-2">No content</div>
                      )}
                      {data2.length > 0 ? (
                        <div
                          className={`data2-box ${
                            showData2 ? "data2-box-open" : ""
                          }`}
                        >
                          {data2.map((item: any, index: number) => (
                            <div
                              key={index}
                              className={`cascader-option ${
                                secondSelectData[valueKey] === item[valueKey]
                                  ? "cascader-option-active"
                                  : ""
                              }`}
                              onClick={(e) => handleChange(e, 2, item)}
                              style={{
                                color:
                                  secondSelectData?.[valueKey] ===
                                  item[valueKey]
                                    ? activeColor.font
                                    : "#000",
                                backgroundColor:
                                  secondSelectData?.[valueKey] ===
                                  item[valueKey]
                                    ? activeColor.bgc
                                    : "",
                              }}
                            >
                              <div className="text">{item[labelKey]}</div>
                              {item.children?.length > 0 && (
                                <div className="more-icon">
                                  <i className="fa-solid fa-chevron-right"></i>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                      {data3.length > 0 ? (
                        <div
                          className={`data3-box ${
                            showData3 ? "data3-box-open" : ""
                          }`}
                        >
                          {data3.map((item: any, index: number) => (
                            <div
                              key={index}
                              className={`cascader-option ${
                                thirdSelectData[valueKey] === item[valueKey]
                                  ? "cascader-option-active"
                                  : ""
                              }`}
                              onClick={(e) => handleChange(e, 3, item)}
                              style={{
                                color:
                                  thirdSelectData?.[valueKey] === item[valueKey]
                                    ? activeColor.font
                                    : "#000",
                                backgroundColor:
                                  thirdSelectData?.[valueKey] === item[valueKey]
                                    ? activeColor.bgc
                                    : "",
                              }}
                            >
                              {item[labelKey]}
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                  <div className="arrow"></div>
                </div>,
                document.body
              )}
            </div>
          </div>
        </div>

        <div className="right">
          {error && required && (
            <div
              className="error-area animate__animated animate__fadeIn mb-1"
              style={{
                color: "#DC3545",
                fontSize: "14px",
                paddingLeft:
                  parseInt(labelWidth) > 120
                    ? "120px"
                    : parseInt(labelWidth) + 20 + "px",
              }}
            >{`${errMsg || `${label || name}不能为空`}`}</div>
          )}
        </div>
      </div>
    );
  }
);

export default Cascader;
