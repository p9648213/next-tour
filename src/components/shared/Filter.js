"use client";

import { useRouter } from "next/navigation";
import SelectBox from "./SelectBox";
import SearchBar from "./SearchBar";

export default function Filter(props) {
  const typeOptions = props.selectTypeOptions;
  const behaviorOptions = props.selectBehaviorOptions;
  const defaultSearchTerm = props.defaultSearchTerm;

  const router = useRouter();

  const onInputChange = (e, name) => {
    if (name === "type") {
      if (defaultSearchTerm !== "") {
        router.push(
          `/?${e.value}=${behaviorOptions.default.value}&search=${defaultSearchTerm}`
        );
      } else {
        router.push(`/?${e.value}=${behaviorOptions.default.value}`);
      }
    }

    if (name === "behavior") {
      if (defaultSearchTerm !== "") {
        router.push(
          `/?${typeOptions.default.value}=${e.value}&search=${defaultSearchTerm}`
        );
      } else {
        router.push(`/?${typeOptions.default.value}=${e.value}`);
      }
    }

    if (name === "searchTerm") {
      if (e.value) {
        if (e.value !== defaultSearchTerm) {
          router.push(
            `/?${typeOptions.default.value}=${behaviorOptions.default.value}&search=${e.value}`
          );
        }
      } else {
        router.push(
          `/?${typeOptions.default.value}=${behaviorOptions.default.value}`
        );
      }
    }
  };

  return (
    <>
      <SearchBar onInputChange={onInputChange} />
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
