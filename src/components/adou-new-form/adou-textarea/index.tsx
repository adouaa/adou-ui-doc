import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react';
import React from 'react';
import './index.scss';
import classNames from 'classnames';

interface TextAreaProps {
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
    labelPosition?: 'left-top' | 'center' | 'top' | 'input-group';
    labelColor?: string;
    required?: boolean;
    ref?: any;
    defaultValue?: string;
    label?: any;
    placeholder?: string;
    disabled?: boolean;
    onChangeOK?: (value: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
}

const TextArea: React.FC<TextAreaProps> = React.forwardRef((props: TextAreaProps, ref) => {
    const {
        suffixContentType = 'button',
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
        labelPosition = 'center',
        required = false,
        name,
        label,
        placeholder,
        disabled,
        defaultValue,
        onChangeOK,
        onFormDataChange,
    } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e.target.value, ...args);
        onFormDataChange && onFormDataChange(name!, e.target.value);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        validate();
    };

    const handleClickCommonSuffixIcon = () => {
        setValue('');
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
        setValue('');
    };
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        validate,
        clear,
    }));

    const textareaClasses = classNames({
        'textarea-warpper': true,
        [externalClassName as string]: externalClassName,
    });

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        } else {
            setValue('');
        }
    }, [defaultValue]);

    return (
        <div className={`${textareaClasses} ${!error && isFormItem && 'mb-3'}`} style={{ width }}>
            <div className={`label-in-${labelPosition} ${inputGroup ? 'input-group' : ''}`}>
                {label && (
                    <span style={{ color: labelColor, width: labelWidth }} className={`${inputGroup ? 'input-group-text' : ''} label-box`}>
                        {label}
                    </span>
                )}
                <div className="textarea-form-content">
                    <textarea
                        style={{
                            width,
                            ...(inline && !width ? { flex: 1, marginRight: '15px' } : {}),
                            ...(suffixContentType === 'button'
                                ? {
                                      borderTopRightRadius: 0,
                                      borderBottomRightRadius: 0,
                                      // borderRight: "none",
                                  }
                                : {}),
                        }}
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
                    {suffixContent && <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'ms-2'}`}>{suffixContent}</div>}
                </div>

                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn"
                    style={{
                        color: '#DC3545',
                        paddingLeft: parseInt(labelWidth) > 120 ? '120px' : parseFloat(labelWidth) + 20 + 'px',
                    }}
                >{`${errMsg || `${label || name}不能为空`}`}</div>
            )}
        </div>
    );
});

export default TextArea;
