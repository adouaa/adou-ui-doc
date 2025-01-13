import React, { ReactNode } from "react";

type ThemeType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface buttonProps {
  type?: ThemeType;
  size?: "sm" | "md" | "lg";
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
  spinerType?: "border" | "grow";
  spinerColor?: ThemeType;
  fontSize?: string;
  onClickOK?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const {
    fontSize,
    spinerType = "border",
    spinerColor,
    loading,
    suffixIcon,
    prefixIcon,
    children,
    type = "primary",
    size = "md",
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
      if (child.props?.className?.includes("loader")) {
        hasLoader = true;
      }
    });
    if (hasLoader) {
      return React.Children.map(children, (child: any) => {
        if (child.props?.className.includes("loader")) {
          return child;
        }
      });
    } else {
      return (
        <>
          <div
            className={`me-2 spinner-${spinerType} spinner-${spinerType}-sm text-${spinerColor}`}
            role="status"
          ></div>
        </>
      );
    }
  };

  return (
    <span className="button-wrapper">
      <button
        style={{ cursor: "pointer", height: "100%" }}
        onClick={handleOnClick}
        className={`btn  btn-${size} ${round ? "rounded-pill" : ""} ${
          textColor ? `text-${textColor}` : ""
        } ${outlineColor ? `btn-outline-${outlineColor}` : `btn-${type}`} ${
          disabled ? "disabled" : ""
        } ${externalClassName}`}
        disabled={loading}
      >
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
