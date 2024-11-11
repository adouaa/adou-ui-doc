import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import './index.scss';

interface RadioProps {
    suffixContentType?: string;
    suffixContent?: any;
    isFormItem?: boolean;
    name?: string;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    defaultValue?: any;
    checked?: boolean;
    label?: string;
    inputGroup?: boolean;
    labelPosition?: 'left-top' | 'center' | 'top' | 'input-group';
    labelColor?: string;
    required?: boolean;
    id?: string;
    value?: string;
    externalClassName?: string;
    options?: any[];
    inline?: boolean;
    onChangeOK?: (item: any) => void;
}

const Radio: React.ForwardRefRenderFunction<any, RadioProps> = (props, ref) => {
    const {
        suffixContentType = 'button',
        suffixContent,
        isFormItem,
        required,
        errMsg,
        labelWidth,
        commonSuffixIcon,
        readOnly,
        inputGroup = false,
        labelPosition = 'center',
        labelColor,
        label,
        name,
        externalClassName,
        inline = true,
        options,
        defaultValue,
        onChangeOK,
    } = props;

    const [optionsList, setOptionsList] = useState(options || []);

    useEffect(() => {
        if (options) {
            // Initialize optionsList with checked property
            setOptionsList(
                options.map((option) => ({
                    ...option,
                    checked: defaultValue && option.value === defaultValue,
                }))
            );
        }
    }, [defaultValue, options]);

    const cls = classNames({
        'form-check-input': true,
        [externalClassName as string]: externalClassName,
    });

    const handleChange = (item: any) => {
        setOptionsList((prevOptions) =>
            prevOptions.map((option) => ({
                ...option,
                checked: option.value === item.value,
            }))
        );
        onChangeOK && onChangeOK(item);
        setError(false);
    };

    const getValue = () => {
        return optionsList.filter((option: any) => option.checked)?.[0]?.value || '';
    };

    // 清除内容方法
    const clear = () => {
        setOptionsList((prevOptions) =>
            prevOptions.map((option) => ({
                ...option,
                checked: false,
            }))
        );
    };
    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    };
    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        // Example validation logic, replace with your actual validation needs
        if (optionsList.some((item: any) => item.checked)) {
            setError(false);
            return true;
        } else {
            setError(true);
            return false;
        }
    };
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        getValue,
        validate,
        clear,
    }));

    const radioClasses = classNames({
        'radio-warpper': true,
        [externalClassName as string]: externalClassName,
        'mb-3': !error && isFormItem,
    });

    return (
        <div className={radioClasses}>
            <div className={`content-box ${inputGroup ? 'inputGroup' : `label-in-${labelPosition}`}`}>
                {label && (
                    <span style={{ color: labelColor, width: labelWidth }} className={`${inputGroup ? 'input-group-text' : ''} label-box`}>
                        {label}
                    </span>
                )}
                <div className="radio-form-content option-box" style={{ display: inline ? 'flex' : '', marginTop: '6px' }}>
                    {optionsList?.map((item: any, index: number) => (
                        <div key={item.value} className={`form-check ${index !== optionsList.length - 1 ? 'me-2' : ''}`}>
                            <input
                                disabled={item.disabled}
                                className={cls}
                                type="radio"
                                name={name}
                                id={item.id}
                                checked={item.checked || false} // Ensure checked is boolean
                                onChange={() => handleChange(item)}
                                value={item.value}
                                readOnly={readOnly}
                            />
                            <label className="form-check-label" htmlFor={item.id}>
                                {item.label || 'Default Radio'}
                            </label>
                        </div>
                    ))}
                    {suffixContent && <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'ms-2'}`}>{suffixContent}</div>}
                </div>
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn"
                    style={{ color: 'red', paddingLeft: parseInt(labelWidth) > 120 ? '120px' : labelWidth }}
                >{`${errMsg || `${name}不能为空`}`}</div>
            )}
        </div>
    );
};

export default React.forwardRef(Radio);
