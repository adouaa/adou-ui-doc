import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const ShowSearchExample = () => {
  const options = [
    {
      value: "john_smith",
      label: "John Smith",
    },
    {
      value: "emma_watson",
      label: "Emma Watson",
    },
    {
      value: "william_jones",
      label: "William Jones",
    },
    {
      value: "olivia_brown",
      label: "Olivia Brown",
    },
    {
      value: "james_davis",
      label: "James Davis",
    },
    {
      value: "ava_wilson",
      label: "Ava Wilson",
    },
    {
      value: "joseph_turner",
      label: "Joseph Turner",
    },
  ];
  return (
    <div className="show-search-wrapper">
      <Select showSearch placeholder="请选择" options={options} />
    </div>
  );
};
export default ShowSearchExample;