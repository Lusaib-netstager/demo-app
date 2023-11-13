"use server";

import React from "react";
import DetailsForm from "./DetailsForm"; // Make sure the import path is correct
import Link from "next/link";

const Page = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <Link href={"/"} className="text-blue-600 underline mb-10">
        Go back
      </Link>
      <DetailsForm />
    </div>
  );
};

export default Page;
