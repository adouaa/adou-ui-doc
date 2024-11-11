import { ChangeEvent, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import getAbsolutePosition from '@site/src/common/utils/getAbsolutePosition';
import useClickOutside from "@site/src/common/hooks/useClickOutside"

export interface SelectProps {
    suffixContentExternalCls?: string;
    selectContentExternalCls?: string;
    minWidth?: any;
    noWrap?: boolean;
    shouldFocus?: boolean;
    activeColor?: { font: string; bgc: string };
    returnType?: 'str' | 'obj';
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
    labelPosition?: 'left-top' | 'center' | 'top';
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: 'sm' | 'lg';
    externalClassName?: string;
    readOnly?: boolean;
    transparent?: boolean;
    maxHeight?: string;
    onChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
}

const Select = React.forwardRef((props: SelectProps, ref) => {
    const {
        suffixContentExternalCls,
        selectContentExternalCls,
        minWidth,
        noWrap = true,
        shouldFocus = false,
        activeColor = { font: '#fff', bgc: '#2783d8' },
        returnType = 'obj',
        showDefaultValue = false,
        labelKey = 'label',
        valueKey = 'value',
        suffixContent,
        showLabel = true,
        suffixContentType,
        inline,
        commonSuffixIcon,
        isFormItem,
        errMsg,
        labelWidth,
        label,
        labelPosition = 'center',
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
        readOnly,
        transparent,
        maxHeight = '200px',
        onChange,
        onFormDataChange,
    } = props;

    const [isShow, setIsShow] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);

    // const { isShow, selectWrapperRef, handleClose } = useClickOutside();

    const [newOptions, setNewOptions] = useState(options || []);
    const [value, setValue] = useState(defaultValue || {});
    const [calcMaxHeight, setCalcMaxHeight] = useState<number>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项

    const selectWrapperRef = useRef<any>(null);
    const customSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const handleClose = () => {
        if (readOnly) return;
        if (isShow) {
            validate(); // 打开后的关闭再去校验有没有值
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
                setIsShow((prev: boolean) => !prev);
            }, 100);
        } else {
            setIsShow((prev: boolean) => !prev);
        }
    };

    const handleDivClick = (e: any) => {
        if (readOnly) return;
        const position = getAbsolutePosition(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        if (!isDropdownOpen) {
            handleClose();
            setIsDropdownOpen(true);
        }
    };

    const handleSelect = (item: any) => {
        setValue(item);
        const returnValue = returnType === 'obj' || showDefaultValue ? item : item[valueKey];
        onChange && onChange(returnValue);
        setError(false);
        handleClose();
        setIsDropdownOpen(false);
        // 新增onFormDataChange来修改外部传入的数据
        onFormDataChange && onFormDataChange(name!, returnValue);

        setError(false);
    };

    useEffect(() => {
        // 如果是必须展示默认值，不通过列表匹配的话，进入这个判断
        if (showDefaultValue) {
            if (typeof defaultValue !== 'object') {
                setValue({ [valueKey]: defaultValue, [labelKey]: defaultValue });
            } else if (typeof defaultValue === 'object') {
                setValue(defaultValue);
            }
        } else {
            if (typeof defaultValue === 'object') {
                const selectOption = options.find((option) => option?.[valueKey] === defaultValue?.[valueKey]);
                // 如果没有找到匹配项，则不设置选中项
                if (selectOption) {
                    setValue(selectOption);
                }
            } else {
                if (defaultValue || defaultValue === 0 || defaultValue === false) {
                    const selectOption = options.find((option) => option[valueKey] === defaultValue);
                    setValue(selectOption);
                } else {
                    setValue('');
                }
            }
        }
        // 如果有值，则自动做校验，防止一开始没值出现空提示，后面切换了有值还是出现空提示的错误
        if (defaultValue) {
            setError(false);
        }
    }, [defaultValue, options]);

    useEffect(() => {
        if (showEmpty) {
            const enhancedOptions = [...options];
            setNewOptions(enhancedOptions);
        } else {
            setNewOptions(options);
        }
    }, [options]);

    useEffect(() => {
        setCalcMaxHeight(newOptions.length * 34 || 100);
    }, [newOptions]);

    const handleSelectChange = (e: any) => {
        setValue(e.target[valueKey]);
    };

    const getValue = () => {
        // 不能加这个逻辑，这样会导致手动选择另外的选项，返回的还是 defaultValue
        /* if (showDefaultValue) {
            return defaultValue;
          } */

        if (value?.[valueKey] || value?.[valueKey] === 0 || value?.[valueKey] === false) {
            // 感觉可有可无
            if (returnType === 'obj') {
                onFormDataChange && onFormDataChange(name!, value);
            } else {
                onFormDataChange && onFormDataChange(name!, value[valueKey] || value[labelKey]);
            }
            return value[valueKey] || value[labelKey];
        } else {
            return value;
        }
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
        setValue('');
    };

    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    };

    useImperativeHandle(ref, () => ({
        validate,
        clear,
        getValue,
    }));

    const wrapperClassName = `select-wrapper ${!error && isFormItem && 'mb-3'} ${externalClassName || ''}`.trim();

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab') {
            // 当下拉项展开的时候进入这个回调，来关闭下拉项
            if (isShow) {
                handleClose();
                setIsDropdownOpen(false);
            }
            return; // 让焦点移动到下一个表单元素
        } else if (isShow) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex <= 0 ? newOptions.length - 1 : prevIndex - 1));
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex >= newOptions.length - 1 ? 0 : prevIndex + 1));
            } else if (event.key === 'Enter') {
                handleClose();
                if (focusedIndex == -1) return;
                event.preventDefault();
                handleSelect(newOptions[focusedIndex]);
            }
        }
    };

    // 全部都 通过 focus来展开下拉列表项
    const handleFocus = (event: any) => {
        if (!shouldFocus) return;
        const position = getAbsolutePosition(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        handleClose();
        setIsDropdownOpen(true);
    };

    useEffect(() => {
        if (!isShow) {
            setIsDropdownOpen(false);
            setFocusedIndex(-1); // 重置聚焦索引
        }
    }, [isShow]);

    useClickOutside([customSelectRef, contentRef], handleClose, contentRef.current && isShow);

    return (
        <div
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={selectWrapperRef}
            className={`${wrapperClassName} `}
            style={{
                width,
                ...(inline && !width ? { flex: 1, marginRight: '15px' } : {}),
            }}
        >
            <select style={{ display: 'none' }} name={name}>
                <option value={value?.[valueKey]}>{value?.[labelKey]}</option>
            </select>
            {/* inputGroup风格 */}
            {inputGroup ? (
                <div className="input-group">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">
                        {label}
                    </label>
                    <select onBlur={validate} onChange={handleSelectChange} value={value?.[valueKey]} disabled={readOnly} className="form-select" id="inputGroupSelect01">
                        {newOptions?.map((option: any) => (
                            <option key={option[valueKey]} value={option[valueKey]}>
                                {option[labelKey]}
                            </option>
                        ))}
                    </select>
                    {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
                </div>
            ) : (
                <div onBlur={validate} className={`content-box label-in-${labelPosition} ${labelPosition === 'top' && inline ? 'me-2' : ''}`}>
                    {showLabel && label && (
                        <span
                            className="label-box"
                            style={{
                                color: labelColor,
                                width: labelWidth,
                                flexWrap: 'nowrap',
                                alignItems: labelPosition === 'left-top' ? 'start' : 'center',
                                ...(labelPosition !== 'top' && { display: 'flex' }),
                                ...(noWrap && { whiteSpace: 'nowrap' }),
                                ...(minWidth && { minWidth }),
                            }}
                        >
                            {label}
                        </span>
                    )}
                    <div className="select-form-content">
                        <div
                            ref={customSelectRef}
                            onClick={(e: any) => handleDivClick(e)}
                            className={`select-content form-control ${selectContentExternalCls || ''}`}
                            style={{
                                textAlign: 'left',
                                background: transparent ? 'transparent' : readOnly ? '#eee' : '#fff',
                                flex: 1,
                                ...(suffixContentType === 'button'
                                    ? {
                                          borderTopRightRadius: 0,
                                          borderBottomRightRadius: 0,
                                          // borderRight: "none",
                                      }
                                    : {}),
                            }}
                        >
                            {value?.[valueKey] || value?.[valueKey] === 0 || value?.[valueKey] === false ? (
                                <span className="select-value">{value[labelKey]}</span>
                            ) : (
                                <span className="select-placeholder">{placeholder}</span>
                            )}
                            {<i style={{ color: labelColor }} className={`icon fa-solid fa-caret-right ${isShow ? 'rotate-up' : 'rotate-down'}`}></i>}
                        </div>
                        {suffixContent && (
                            <div
                                className={`${
                                    suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'suffix-content-text-wrapper ms-2'
                                } ${suffixContentExternalCls || ''}`}
                            >
                                {suffixContent}
                            </div>
                        )}
                    </div>
                    {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}

                    {ReactDOM.createPortal(
                        <div
                            style={{
                                position: 'absolute',
                                top: customSelectContentPosition.y + customSelectContentPosition.height + 'px',
                                left: customSelectContentPosition.x + 'px',
                                ...(isShow
                                    ? {
                                          maxHeight: calcMaxHeight > parseInt(maxHeight!) ? maxHeight : calcMaxHeight + 'px',
                                      }
                                    : {}),
                                ...(closing ? { opacity: 0, transform: 'scaleY(0)' } : {}),
                            }}
                            ref={contentRef}
                            className={`select-option-content ${isShow ? 'select-option-content-open' : ''} ${closing ? 'select-option-content-closing' : ''}`}
                        >
                            {isShow && (
                                <div className={`option-box`}>
                                    {newOptions.length > 0 ? (
                                        newOptions.map((item, index) => (
                                            <div
                                                onClick={() => handleSelect(item)}
                                                style={{
                                                    color: value?.[valueKey] === item[valueKey] ? activeColor.font : '#000',
                                                    backgroundColor: value?.[valueKey] === item[valueKey] ? activeColor.bgc : '',
                                                }}
                                                className={`select-option ${
                                                    value?.[valueKey] === item[valueKey] ? 'select-option-active' : ''
                                                } ${focusedIndex === index ? 'focused' : ''}`}
                                                key={item[valueKey]}
                                            >
                                                {item[labelKey]}
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
            )}
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn mb-1"
                    style={{
                        color: '#DC3545',
                        fontSize: '14px',
                        paddingLeft: parseInt(labelWidth) > 120 ? '120px' : parseInt(labelWidth) + 20 + 'px',
                    }}
                >{`${errMsg || `${label || name}不能为空`}`}</div>
            )}
        </div>
    );
});

export default Select;
