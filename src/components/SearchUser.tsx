"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextField from "./TextField";
import validateString from "@/util/validateString";
import { useRouter } from "next/navigation";

/**
 *
 */
export default function SearchUser() {
  const [searchval, setSearchVal] = useState("");

  const router = useRouter();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    console.log(val, validateString(val));
    if (validateString(val)) {
      setSearchVal(val);
    }
  };

  const onSubmitClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const searchList = searchval
      .split(",")
      .filter((e) => !["", undefined, null].includes(e));
    router.push(`/user-info/${searchList.join("/")}`, { scroll: false });
  };

  return (
    <form className=" w-[30%] fixed top-20 right-20">
      <TextField
        id="searchVal"
        name="searchVal"
        value={searchval}
        placeholder="Enter search user id seperated by comma"
        disableHelperText={false}
        helperText="This is a helper text"
        onChange={onInputChange}
      />
      <PrimaryButton onClick={onSubmitClick}>Go</PrimaryButton>
    </form>
  );
}
