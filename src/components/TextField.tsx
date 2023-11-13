"use client";

import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  disableHelperText: boolean;
  helperText: string;
}

export default function TextField({
  disableHelperText = true,
  helperText,
  ...rest
}: TextFieldProps) {
  const str = "w-full h-full text-black";

  return (
    <div className={str}>
      <div className="relative inline-block w-full h-full border-box">
        <input
          className="outline-none box-border w-full h-full bg-surface border-[1px] border-surface-border rounded-[5px] px-[16px] py-[10px] text-[16px] font-normal leading-[20px] placeholder-black "
          {...rest}
          style={{
            height: "100%",
          }}
        />
      </div>
      <div
        id={`${rest?.id}_input_helper_text`}
        className={`w-full mt-1 text-system-red text-right font-[400] text-[12px] min-h-[25px] h-auto ${
          disableHelperText ? "hidden" : ""
        }`}
      >
        {helperText}
      </div>
    </div>
  );
}
