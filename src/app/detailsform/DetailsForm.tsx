"use client";

import PrimaryButton from "@/components/PrimaryButton";
import TextField from "@/components/TextField";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export default function DetailsForm() {
  const [userName, setUserName] = useState("");

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value || "");
  };

  const onSubmitClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/detailsForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form>
      <TextField
        id="username"
        name="username"
        value={userName}
        placeholder="Enter your username"
        disableHelperText={false}
        helperText="This is a helper text"
        onChange={onInputChange}
      />
      <PrimaryButton onClick={onSubmitClick}>Submit</PrimaryButton>
    </form>
  );
}
