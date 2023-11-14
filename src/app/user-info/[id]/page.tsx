import { User } from "@/types/userType";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

async function getUserInfo(id: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const user = ((await res.json()) || [])?.[0];
  return user;
}

/**
 * 
 */
export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const user = await getUserInfo(id);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Image
        src={`https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg`}
        alt={`${user?.name}'s avatar`}
        className="rounded-full w-20 h-20 mb-4"
        width={100}
        height={100}
      />
      <h1 className="text-2xl font-bold">{user?.name}</h1>
      <p className="text-gray-500">{user?.email}</p>
    </div>
  );
}
