import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./index.scss"; // 引入样式文件
import useClickOutside from "@site/src/hooks/useClickOutside";

interface PopoverProps {
  title?: any;
  trigger?: "click" | "hover";
  ref?: any;
  show?: boolean;
  content: any;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  bgc?: string;
  color?: string;
  borderColor?: string;
  wrapperClassname?: string;
  onClose?: () => void;
  onShowChange?: (show: boolean) => void;
}

const Popover: React.FC<PopoverProps> = forwardRef(
  (
    {
      title,
      trigger = "click",
      show = true,
      content,
      position = "top",
      children,
      bgc,
      color,
      borderColor,
      wrapperClassname,
      onClose,
      onShowChange,
    },
    ref
  ) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    // 用来实现外部传来的show参与到控制是否展示的逻辑中来(偏业务逻辑了)
    //  不能用 isShow是因为 isShow是异步的。。
    const isShowRef = useRef<boolean>(show);

    const [isVisible, setIsVisible] = useState(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果

    const isEnterContentRef = useRef<boolean>(false);

    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    // ！！！用来记录鼠标是否进入提示区域
    //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
    const isEnterPopoverRef = useRef<boolean>(false);
    const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 阻止事件的冒泡
    };

    const handleContentClick = () => {
      setTimeout(() => {
        if (trigger === "hover") return;
        if (isVisible) {
          setTimeout(() => {
            setIsVisible(false);
          }, 100);
          setTimeout(() => {
            setIsShow(false);
            onClose && onClose();
          }, 200);
          return;
        } // 防止此时Popover已经展示，再点击关闭后会立马又展示
        // 进入的时候，如果存在定时器，也清除掉
        if (enterTimeoutRef.current) {
          clearTimeout(enterTimeoutRef.current);
        }
        if (!isShowRef.current) return; // 如果外边的不想展示，则在这里return，不继续执行展示逻辑
        setIsShow(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 0); // 这边加个时间为 0 的定时器，是为了 在父组件点击 trigger(children) 的时候，先执行父组件的点击事件，再执行这里的事件 --> 保证传进来的 show 是正确的(true)
    };

    const handleMouseLeave = () => {
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      setTimeout(() => {
        if (isEnterContentRef.current) return;
        setTimeout(() => {
          handleClosePopover(); // 离开后 再手动执行一下关闭的逻辑
        }, 100); // 给个定时器，防止移入后立马移出，导致提示区域展示出来一点点就消失
      }, 100);
    };

    /**
     * 用来实现当鼠标进入提示区域可以让提示存在的效果
     */
    const handleMouseEnterPopover = () => {
      if (trigger === "click") return;
      enterTimeoutRef.current = setTimeout(() => {
        isEnterPopoverRef.current = true;
        // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
        setIsShow(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 200); // 给个 100ms 的定时器，防止鼠标 快速移入移出
    };

    // 关闭 Popover
    const handleClosePopover = () => {
      isEnterPopoverRef.current = false;
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
      setTimeout(() => {
        setIsShow(false);
        onClose && onClose();
      }, 300);
    };

    // 进入 popover 内容区域的时候，不隐藏提示文字
    const handleEnterContent = () => {
      isEnterContentRef.current = true;
    };
    const handleLeaveContent = () => {
      if (trigger === "click") return; // 如果是点击触发，则不需要离开 content 的时候关闭 Popover
      isEnterContentRef.current = false;
      // 离开后 再手动执行一下关闭的逻辑
      handleClosePopover();
    };

    // 点击 触发内容 的时候也不执行这个钩子
    useClickOutside(
      [popoverRef, triggerRef],
      handleClosePopover,
      isVisible && isShow && Boolean(popoverRef.current)
    );

    useImperativeHandle(ref, () => ({
      handleClose: handleClosePopover,
    }));

    useEffect(() => {
      isShowRef.current = show;
      if (!show) {
        // 为了实现 在浮层内关闭的动画不会太丑，所以要给个 100ms 的定时器，让动画只展示 100ms
        setIsVisible(false);
        setTimeout(() => {
          setIsShow(false);
        }, 100); // 要把 isVisible 置为 false，不能置 isShow 为 false，不然就没有动画
      }
    }, [show]);

    // 当 isShow 变化的时候，通知父组件
    useEffect(() => {
      onShowChange && onShowChange(isShow);
    }, [isShow]);

    return (
      <div className={`adou-popover-wrapper ${wrapperClassname || ""}`}>
        <div
          ref={triggerRef}
          className="trigger-content"
          onMouseEnter={handleMouseEnterPopover}
          onClick={handleContentClick}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {content && isShow && (
          <div
            ref={popoverRef}
            onMouseEnter={handleEnterContent}
            onMouseLeave={handleLeaveContent}
            onClick={handleClick}
            // onMouseEnter={handleMouseEnterPopover}
            // onMouseLeave={handleClosePopover}
            className={`adou-popover p-2 ${
              isVisible ? "show-popover" : ""
            } adou-popover-${position}`}
            style={{ backgroundColor: bgc, color: color }}
          >
            <div
              style={{
                borderColor: `transparent transparent ${borderColor} transparent`,
              }}
              className={`adou-popover-arrow adou-popover-arrow-${position}`}
            ></div>
            <div className="popover-title mb-2">{title}</div>
            <div className="popover-content">{content}</div>
          </div>
        )}
      </div>
    );
  }
);

export default Popover;
