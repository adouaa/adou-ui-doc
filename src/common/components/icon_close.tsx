import React, { memo } from 'react';

const IconClose = memo((props) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <svg
                style={{
                    width: '18px', // 鼠标移入时放大宽度
                    height: '18px', // 鼠标移入时放大高度
                    fill: isHovered ? 'red' : '#848484', // 鼠标移入时改变颜色，这里改为红色，可按需调整
                }}
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3182"
                width="200"
                height="200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <path
                    d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z"
                    fill={isHovered ? 'red' : '#848484'}
                    p-id="3183"
                ></path>
            </svg>
        </div>
    );
});

export default IconClose;
