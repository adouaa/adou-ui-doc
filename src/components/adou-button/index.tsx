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
  onClick?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const {
    fontSize = "14px",
    spinerType = "border",
    spinerColor,
    loading,
    suffixIcon,
    prefixIcon,
    children,
    type = "primary",
    size = "sm",
    externalClassName,
    round,
    textColor,
    disabled,
    outlineColor,
    onClick,
  } = props;

  const handleOnClick = () => {
    onClick && onClick();
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
            margin: "0 0.2rem",
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
        console.log("有: ");
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
            className={`spinner-${spinerType} spinner-${spinerType}-sm text-${spinerColor}`}
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
        className={`btn btn-${type} btn-${size} ${
          round ? "rounded-pill" : ""
        } text-${textColor} btn-outline-${outlineColor} ${
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
