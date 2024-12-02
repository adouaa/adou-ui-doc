import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import useDrag from "../../common/hooks/useDrag";
import useClickOutside from "../../common/hooks/useClickOutside";
import Button from "@site/src/components/adou-button";

interface DialogProps {
  showConfirm?: boolean;
  showCancel?: boolean;
  showClose?: boolean;
  canConfirm?: boolean;
  clickOutside?: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmBtnClass?: string;
  cancelBtnClass?: string;
  show?: boolean;
  title?: string;
  children?: React.ReactNode;
  type?: string;
  maxHeight?: string;
  width?: string;
  maxWidth?: string;
  onCancel?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
}
const Dialog: React.FC<DialogProps> = ({
  showConfirm = true,
  showCancel = true,
  showClose = true,
  canConfirm = true,
  clickOutside = false,
  confirmText = "确定",
  cancelText = "取消",
  confirmBtnClass = "primary",
  cancelBtnClass = "secondary",
  show: isOpen = false,
  title = "提示",
  children = null,
  type = "",
  maxHeight = "500px",
  width = "600px",
  maxWidth,
  onCancel,
  onClose = () => {},
  onConfirm = () => {},
}) => {
  const dialogRef = useRef<any>(null);
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [firstOpen, setFirstOpen] = useState<boolean>(false);

  const { position, handleMouseDown } = useDrag(dialogRef, true, false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onConfirm && onConfirm();
    }
  };

  useEffect(() => {
    if (show) {
      if (dialogRef.current) {
        const dialogWidth = dialogRef.current.offsetWidth;
        const dialogHeight = dialogRef.current.offsetHeight;
        const initialX = (window.innerWidth - dialogWidth) / 2;
        const initialY = (window.innerHeight - dialogHeight) / 2;
        dialogRef.current.style.top = `${
          type === "tip" ? `${initialY}px` : "2%"
        }`;
        dialogRef.current.style.left = `${initialX}px`;
        setTimeout(() => {
          dialogRef.current.focus(); // 将焦点设置到 modal
        }, 100);
      }
    }
    setTimeout(() => {
      setFirstOpen(show);
    }, 10);
  }, [show]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShow(isOpen);
      }, 100);
      setTimeout(() => {
        setIsAnimating(true);
      }, 200);
    } else {
      setTimeout(() => {
        setShow(isOpen);
      }, 100);
    }
  }, [isOpen, type]);

  useClickOutside(dialogRef, clickOutside && onClose);

  return (
    <>
      {(isOpen || isAnimating) &&
        ReactDOM.createPortal(
          <div className={`dialog-overlay ${show ? "open" : ""}`}>
            <div
              onKeyDown={handleKeyDown}
              tabIndex={0}
              ref={dialogRef}
              className={`dialog ${show ? "open" : ""}`}
              style={{
                top: `${position.y - 20}px`,
                left: `${position.x}px`,
                transform: `translateY(${firstOpen ? "20px" : "0"})`,
                width,
                maxWidth,
              }}
            >
              <div
                className="dialog-header p-2 ps-3"
                onMouseDown={handleMouseDown}
              >
                <span className="fs-5">{title}</span>
                {showClose && (
                  <button
                    className="dialog-close hover-scale"
                    onClick={onClose}
                  >
                    &times;
                  </button>
                )}
              </div>
              <div className="dialog-content" style={{ maxHeight }}>
                {children}
              </div>
              <div className="dialog-footer d-flex justify-content-end p-3">
                {showCancel && (
                  <Button
                    externalClassName={`me-2 btn-${cancelBtnClass}`}
                    size="md"
                    onClick={onCancel ?? onClose}
                  >
                    {cancelText}
                  </Button>
                )}
                {showConfirm && (
                  <Button
                    disabled={!canConfirm}
                    externalClassName={`btn-${confirmBtnClass}`}
                    size="md"
                    onClick={onConfirm}
                  >
                    {confirmText}
                  </Button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Dialog;
