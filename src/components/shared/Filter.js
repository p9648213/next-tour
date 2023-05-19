"use client";

import { useRouter } from "next/navigation";
import SelectBox from "./SelectBox";
import SearchBar from "./SearchBar";

export default function Filter(props) {
  const typeOptions = props.selectTypeOptions;
  const behaviorOptions = props.selectBehaviorOptions;

  const router = useRouter();

  const onInputChange = (e, name) => {
    if (name === "type") {
      router.push(`/?${e.value}=${behaviorOptions.default.value}`);
    }
    if (name === "behavior") {
      router.push(`/?${typeOptions.default.value}=${e.value}`);
    }
  };

  return (
    <>
      <SearchBar />
      <SelectBox
        optionsConfig={typeOptions}
        defaultValue={typeOptions.default}
        onInputChange={onInputChange}
      />
      <SelectBox
        optionsConfig={behaviorOptions}
        defaultValue={behaviorOptions.default}
        onInputChange={onInputChange}
      />
    </>
  );
}
