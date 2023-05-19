"use client";

import Select from "react-select";
import { useId } from "react";

export default function SelectBox({
  optionsConfig,
  defaultValue,
  onInputChange,
}) {
  const formatOptionLabel = (data) => {
    return (
      <div key={data.label} style={{ fontSize: 18 }}>
        {data.label}
      </div>
    );
  };

  return (
    <div className="select-container">
      <Select
        options={optionsConfig.options}
        formatOptionLabel={formatOptionLabel}
        defaultValue={defaultValue}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: "60px",
            fontSize: "18px",
            border: "none",
            borderRadius: "0px",
            padding: "0 5px 0 5px",
          }),
        }}
        instanceId={useId()}
        onChange={(e) => onInputChange(e, optionsConfig.name)}
      />
    </div>
  );
}
