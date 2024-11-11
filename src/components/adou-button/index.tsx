import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './index.scss';

type ThemeType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';

interface buttonProps {
    type?: ThemeType;
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    externalClassName?: string;
    round?: boolean;
    textColor?: ThemeType;
    outlineColor?: ThemeType;
    disabled?: boolean;
    label?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    loading?: boolean;
    spinerType?: 'border' | 'grow';
    spinerColor?: ThemeType;
    fontSize?: string;
    onClickOK?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const {
        fontSize = '14px',
        spinerType = 'border',
        spinerColor,
        loading,
        suffixIcon,
        prefixIcon,
        children,
        type,
        size,
        externalClassName,
        round,
        textColor,
        disabled,
        outlineColor,
        onClickOK,
    } = props;

    const handleOnClick = () => {
        onClickOK && onClickOK();
    };
    const cls = classNames({
        btn: true,
        [`btn-${type}`]: type, // 是 true就会加上这个类名
        [`btn-${size}`]: size,
        [`rounded-pill`]: round,
        [`text-${textColor}`]: textColor,
        [`btn-outline-${outlineColor}`]: outlineColor,
        disabled,
        [externalClassName as string]: externalClassName,
    });

    const renderPrefixIcon = () => {
        return <i className={`${prefixIcon}`}></i>;
    };

    const rendersuffixIcon = () => {
        return <i className={`${suffixIcon}`}></i>;
    };

    /* const renderLoading = () => {
        return React.Children.map(children, (child: any) => {
            if (!React.isValidElement(child)) {
                child = <span className="m-1">{child}</span>
                const enhancedChild = React.cloneElement(child!, {
                    style: {
                    }
                } as React.Attributes);
                return enhancedChild;
            }
        });
    }; */

    const renderLabel = () => {
        return React.Children.map(children, (child: any) => {
            if (!React.isValidElement(child)) {
                child = <span>{child}</span>;
                const enhancedChild = React.cloneElement(child, {
                    style: {
                        margin: '0 0.5rem',
                        fontSize,
                    },
                } as React.Attributes);
                return enhancedChild;
            }
        });
    };

    const renderLoadingIcon = () => {
        let hasLoader = false;
        React.Children.map(children, (child: any) => {
            if (child.props?.className?.includes('loader')) {
                hasLoader = true;
                console.log('有: ');
            }
        });
        if (hasLoader) {
            return React.Children.map(children, (child: any) => {
                if (child.props?.className.includes('loader')) {
                    return child;
                }
            });
        } else {
            return (
                <>
                    <div className={`spinner-${spinerType} spinner-${spinerType}-sm text-${spinerColor}`} role="status"></div>
                </>
            );
        }
    };

    return (
        <span className="button-wrapper">
            <button style={{ cursor: 'pointer', height: '100%' }} onClick={handleOnClick} className={cls} disabled={loading}>
                {loading ? (
                    <div className="loading-btn">
                        {renderLoadingIcon()}
                        {renderLabel()}
                    </div>
                ) : (
                    <>
                        {prefixIcon && renderPrefixIcon()}
                        {renderLabel()}
                        {suffixIcon && rendersuffixIcon()}
                    </>
                )}
            </button>
        </span>
    );
};

export default Button;
