import "./index.scss";
import React from "react";

interface HintProps {
  hintContent: HintItem[];
  bgc?: string;
  color?: string;
}

interface ContentProps {
  value: string | React.ReactNode;
  textColor?: string;
  textBgcolor?: string;
}

interface HintItem {
  title: string;
  content: ContentProps[];
}

const Hint = ({
  hintContent,
  bgc = "#cff4fc",
  color = "#087990",
}: HintProps) => {
  const renderHint = () => {
    return hintContent.map((item, index) => (
      <div className="hint-item" key={index}>
        <div className="hint-title">
          <div>
            <i className="fa-solid fa-circle-info me-2"></i>
            <span>{item.title}</span>
          </div>
        </div>
        <div className="hint-content">
          {item.content.map((item, i) => (
            <div className="hint-content-item">
              <span className="index me-2">{i + 1}.</span>
              <span className="hint-text-item">
                <span
                  className="value"
                  key={i}
                  style={{
                    color: item.textColor,
                    // margin: item.highlight && i !== 0 ? "0 4px" : "0",
                    backgroundColor: item.textBgcolor,
                  }}
                >
                  {item.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="hint-wrapper" style={{ backgroundColor: bgc, color }}>
      {renderHint()}
    </div>
  );
};

export default Hint;
