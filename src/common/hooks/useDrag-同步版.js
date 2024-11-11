import { useState, useEffect, useRef } from 'react';

const useDrag = (initialPosition, dialogRef, isDialog = false, autoStyle = true) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState(initialPosition);
    const elementFirstPositionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (isDragging) {
            if (!isDialog) {
                setPosition({
                    x: e.clientX - dragOffset.x - elementFirstPositionRef.current?.left,
                    y: e.clientY - dragOffset.y - elementFirstPositionRef.current?.top,
                });
            } else {
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y,
                });
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        if (autoStyle && dialogRef.current) {
            dialogRef.current.style.position = 'relative';
            dialogRef.current.style.top = position.y + 'px';
            dialogRef.current.style.left = position.x + 'px';
            dialogRef.current.style.cursor = 'move';
        }
    }, [position]);

    const handleMouseDown = (e) => {
        const dialogRect = dialogRef.current.getBoundingClientRect();
        setIsDragging(true);
        // 因为弹窗一开始有 left和top，所以要减去 当前元素位置的left 和 top
        // 而其他元素在哪就是在哪，不需要减，所以要判断是弹窗还是普通元素哦 ---- 这两句注释没用了
        setDragOffset({
            x: e.clientX - dialogRect.left,
            y: e.clientY - dialogRect.top,
        });
    };

    useEffect(() => {
        // 如果元素的定位是 relative的话，当元素挂载完之后，要去记录一开始距离浏览器的位置
        if (dialogRef.current) {
            elementFirstPositionRef.current = dialogRef.current.getBoundingClientRect();
        }
    }, [dialogRef]);

    return {
        position,
        handleMouseDown,
    };
};

export default useDrag;
