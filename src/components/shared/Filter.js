"use client";

import { useRouter } from "next/navigation";
import SelectBox from "./SelectBox";
import SearchBar from "./SearchBar";

export default function Filter(props) {
  const router = useRouter();

  const typeOptions = props.selectTypeOptions;
  const behaviorOptions = props.selectBehaviorOptions;
  const defaultSearchTerm = props.defaultSearchTerm;
  const defaultPage = props.defaultPage;

  const onInputChange = (e, name) => {
    if (name === "type") {
      if (e.value !== typeOptions.default.value) {
        router.push(
          `/${defaultPage !== 1 ? `?page=${defaultPage}&` : "?"}${e.value}=${
            behaviorOptions.default.value
          }${defaultSearchTerm !== "" ? `&search=${defaultSearchTerm}` : ""}`
        );
      }
    }

    if (name === "behavior") {
      if (e.value !== behaviorOptions.default.value) {
        router.push(
          `/${defaultPage !== 1 ? `?page=${defaultPage}&` : "?"}${
            typeOptions.default.value
          }=${e.value}${
            defaultSearchTerm !== "" ? `&search=${defaultSearchTerm}` : ""
          }`
        );
      }
    }

    if (name === "searchTerm") {
      if (e.value !== defaultSearchTerm) {
        router.push(
          `/${defaultPage !== 1 ? `?page=${defaultPage}&` : "?"}${
            typeOptions.default.value
          }=${behaviorOptions.default.value}${
            e.value !== "" ? `&search=${e.value}` : ""
          }`
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
