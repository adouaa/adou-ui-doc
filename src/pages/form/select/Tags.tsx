import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
import BrowserOnly from "@docusaurus/BrowserOnly";
const TagsExample = () => {
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
    <div className="tags-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
         <Select
         defaultValue={[
           { value: "john_smith", label: "John Smith" },
           "emma_watson",
         ]}
         mode="tags"
         placeholder="请输入"
         options={options}
       />
        )}
      </BrowserOnly>
      
    </div>
  );
};
export default TagsExample;
