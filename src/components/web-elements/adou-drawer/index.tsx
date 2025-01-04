import useClickOutside from "@site/src/hooks/useClickOutside";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import React from "react";

interface DrawerProps {
  actRef?: any;
  clickOutside?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  placement?: "start" | "end" | "top" | "bottom";
  width?: string | number;
  height?: string | number;
  showMask?: boolean;
  maskClosable?: boolean;
  showCloseButton?: boolean;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  onClose?: () => void;
  onOpen?: () => void;
  trigger?: React.ReactNode;
  closeOnEsc?: boolean;
}

const Drawer = forwardRef<any, DrawerProps>(
  (
    {
      actRef,
      clickOutside = true,
      children,
      title = "Offcanvas",
      placement = "end",
      width = "400px",
      height = "100%",
      showMask = true,
      maskClosable = true,
      showCloseButton = true,
      className = "",
      headerClassName = "",
      bodyClassName = "",
      onClose,
      onOpen,
      trigger,
      closeOnEsc = true,
    },
    ref
  ) => {
    const [hiding, setHiding] = useState(false);
    const [show, setShow] = useState<boolean>(false);
    const [showMaskState, setShowMaskState] = useState<boolean>(false);

    const offCanvasRef = useRef<any>(null);

    const toggleOffcanvas = () => {
      if (show) {
        handleClose();
      } else {
        handleOpen();
      }
    };

    const handleClose = () => {
      setHiding(true);

      setTimeout(() => {
        setHiding(false);
        setShow(false);
        onClose?.();
      }, 300);
      setTimeout(() => {
        setShowMaskState(false);
      }, 500);
    };

    const handleOpen = () => {
      setShowMaskState(true);

      setTimeout(() => {
        setShow(true);
        onOpen?.();
      }, 100);
    };

    const handleMaskClick = () => {
      if (maskClosable) {
        handleClose();
      }
    };

    useClickOutside(
      [offCanvasRef],
      handleClose,
      clickOutside && offCanvasRef.current && show
    );

    useImperativeHandle(actRef || ref, () => ({
      open: handleOpen,
      close: handleClose,
      toggle: toggleOffcanvas,
      isOpen: show,
    }));

    const getPlacementStyles = () => {
      const styles: React.CSSProperties = {};

      if (placement === "start" || placement === "end") {
        styles.width = width;
        styles.height = height;
      } else {
        styles.height = height;
        styles.width = "100%";
      }

      return styles;
    };

    // 新增：监听Esc键关闭
    useEffect(() => {
      const handleEscKey = (event: KeyboardEvent) => {
        if (closeOnEsc && show && event.key === "Escape") {
          handleClose();
        }
      };

      if (show) {
        document.addEventListener("keydown", handleEscKey);
      }

      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }, [show, closeOnEsc]);

    return (
      <div className="drawer-wrapper">
        {trigger && (
          <div onClick={toggleOffcanvas} className="drawer-trigger">
            {trigger}
          </div>
        )}
        <div
          ref={offCanvasRef}
          className={`offcanvas offcanvas-${placement} ${show ? "show" : ""} ${
            hiding ? "hiding" : ""
          } ${className}`}
          style={getPlacementStyles()}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div className={`offcanvas-header ${headerClassName}`}>
            <h5 className="offcanvas-title">{title}</h5>
            {showCloseButton && (
              <button
                onClick={handleClose}
                type="button"
                className="btn-close"
                aria-label="Close"
              />
            )}
          </div>
          <div className={`offcanvas-body ${bodyClassName}`}>{children}</div>
        </div>
        {showMask && showMaskState && (
          <div
            onClick={handleMaskClick}
            style={{ transition: "all .3s ease" }}
            className={`offcanvas-backdrop fade ${show ? "show" : ""}`}
          />
        )}
      </div>
    );
  }
);

Drawer.displayName = "Drawer";

export default Drawer;
