"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function UserInfo() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const father = searchParams.get("father");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-5xl font-extrabold">
      <Link
        href={"/"}
        className="text-blue-600 underline mb-10 text-xl font-normal"
      >
        HomePage
      </Link>
      {name}&nbsp;{father}
    </div>
  );
}
