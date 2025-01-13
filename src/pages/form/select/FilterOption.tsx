import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
import BrowserOnly from "@docusaurus/BrowserOnly";
const FilterOptionExample = () => {
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
      value: "henry_taylor",
      label: "Henry Taylor",
    },
    {
      value: "sophia_miller",
      label: "Sophia Miller",
    },
    {
      value: "benjamin_white",
      label: "Benjamin White",
    },
    {
      value: "isabella_green",
      label: "Isabella Green",
    },
    {
      value: "daniel_king",
      label: "Daniel King",
    },
    {
      value: "mia_lee",
      label: "Mia Lee",
    },
    {
      value: "alexander_clark",
      label: "Alexander Clark",
    },
    {
      value: "charlotte_ross",
      label: "Charlotte Ross",
    },
    {
      value: "matthew_hall",
      label: "Matthew Hall",
    },
    {
      value: "amelia_baker",
      label: "Amelia Baker",
    },
    {
      value: "joseph_turner",
      label: "Joseph Turner",
    },
    {
      value: "evelyn_cook",
      label: "Evelyn Cook",
    },
    {
      value: "david_porter",
      label: "David Porter",
    },
    {
      value: "scarlett_moore",
      label: "Scarlett Moore",
    },
  ];
  return (
    <div className="filter-option-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <Select
            filterOption={(inputValue, option) =>
              option.label.toLowerCase().includes("jo")
            }
            placeholder="请输入"
            options={options}
          />
        )}
      </BrowserOnly>
    </div>
  );
};
export default FilterOptionExample;
