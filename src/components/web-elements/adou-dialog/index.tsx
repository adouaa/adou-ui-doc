import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import useDrag from "@site/src/common/hooks/useDrag";
import useClickOutside from "@site/src/hooks/useClickOutside";
import Button from "../../adou-button";

interface DialogProps {
  draggable?: boolean;
  confirmLoading?: boolean;
  needDestroy?: boolean; // 是否需要销毁
  maxY?: boolean;
  maxX?: boolean;
  max?: boolean;
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
  height?: string;
  maxWidth?: string;
  onCancel?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
}
const Dialog: React.FC<DialogProps> = ({
  draggable,
  confirmLoading,
  needDestroy = false,
  maxY,
  maxX,
  max,
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
  maxHeight = "400px",
  width = type === "tip" ? "420px" : "600px",
  height,
  maxWidth,
  onCancel,
  onClose = () => {},
  onConfirm = () => {},
}) => {
  const dialogRef = useRef<any>(null);
  const [show, setShow] = useState(false);
  const [destroied, setDestroied] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [firstOpen, setFirstOpen] = useState<boolean>(false);

  const { position, handleMouseDown } = useDrag(dialogRef, true, false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onConfirm && onConfirm();
    } else if (event.key === "Escape") {
      onClose && onClose();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose && onClose();
  };

  useEffect(() => {
    if (show) {
      if (dialogRef.current) {
        const dialogWidth = dialogRef.current.offsetWidth;
        const dialogHeight = dialogRef.current.offsetHeight;
        const initialX = (window.innerWidth - dialogWidth) / 2;
        const initialY = (window.innerHeight - dialogHeight) / 2;

        // 如果对 Y轴 没有要求，则按 type 来定位
        if (!maxY && !max) {
          // 减去20是因为有个 transForm: translateY(20px);
          dialogRef.current.style.top = `${
            type === "tip" ? `${initialY - 20}px` : "2%"
          }`;
        } else {
          // 如果是对 Y轴 有最大要求，则不仅是第一次，每次都要让 Y轴 在浏览器最上面，Y轴 占满整个屏幕
          dialogRef.current.style.top = `-20px`;
        }
        dialogRef.current.style.left = `${initialX}px`;

        // 注意，这边要给个 100ms 差不多的定时器来确保 dialogRef.current 已经渲染完成
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
      setDestroied(false);
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
      // 需要销毁再执行该逻辑
      if (needDestroy) {
        setTimeout(() => {
          setDestroied(true);
        }, 300); // 注意，延迟时间要 300差不多
      }
    }
  }, [isOpen, type]);

  useClickOutside([dialogRef], clickOutside && onClose);

  return (
    <>
      {(isOpen || isAnimating) &&
        ReactDOM.createPortal(
          <div className={`dialog-overlay ${show ? "open" : ""}`}>
            {!destroied && (
              <div
                onKeyDown={handleKeyDown}
                tabIndex={0}
                ref={dialogRef}
                className={`dialog ${show ? "open" : ""}`}
                style={{
                  top: `${position.y - 20}px`,
                  left: `${position.x}px`,
                  transform: `translateY(${firstOpen ? "20px" : "0"})`,
                  maxWidth: max || maxX ? "100vw" : width || maxWidth,
                  width: max || maxX ? "100vw" : width || maxWidth,
                }}
              >
                <div
                  className="dialog-header p-2 ps-3"
                  {...(draggable && {
                    onMouseDown: handleMouseDown,
                  })}
                  style={{ cursor: draggable ? "move" : "default" }}
                >
                  <span className="fs-5">{title}</span>
                  {showClose && (
                    <button
                      className="dialog-close hover-scale"
                      onClick={handleClose}
                    >
                      &times;
                    </button>
                  )}
                </div>
                <div
                  className="dialog-content"
                  style={{
                    maxHeight: max || maxY ? "79.5vh" : height || maxHeight,
                    height: max || maxY ? "79.5vh" : height,
                  }}
                >
                  {children || "默认对话框内容"}
                </div>
                <div
                  className={`dialog-footer d-flex justify-content-end ${
                    type === "tip" ? "p-2" : "p-3"
                  }`}
                >
                  {showCancel && (
                    <Button
                      type="secondary"
                      externalClassName={`me-2 btn-${cancelBtnClass}`}
                      size={`${type === "tip" ? "sm" : "md"}`}
                      onClick={onCancel ?? onClose}
                    >
                      {cancelText}
                    </Button>
                  )}
                  {showConfirm && (
                    <Button
                      type="primary"
                      loading={confirmLoading}
                      disabled={!canConfirm}
                      externalClassName={`btn-${confirmBtnClass}`}
                      size={`${type === "tip" ? "sm" : "md"}`}
                      onClick={onConfirm}
                    >
                      {confirmText}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default Dialog;
