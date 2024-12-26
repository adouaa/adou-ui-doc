import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";

interface RenderProps {}

const Render = ({}: RenderProps) => {
  const data = [
    { label: "Item 1", value: "1" },
    {
      label: "Item 2",
      value: "2",
      render: () => (
        <a style={{ textDecoration: "underline", color: "red" }}>666</a>
      ),
    },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
    { label: "Item 9", value: "9" },
    { label: "Item 10", value: "10" },
  ];

  return (
    <div className="render-wrapper">
      <ListGroup
        render={(item: any, labelKey: string) => (
          <span className="text-warning">{item[labelKey]}</span>
        )}
        data={data}
      ></ListGroup>
    </div>
  );
};

export default Render;
