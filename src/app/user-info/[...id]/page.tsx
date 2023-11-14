import { User } from "@/types/userType";

async function getUserInfo(id: number[]): Promise<User[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?${id
      .map((e) => `id[]=${e}`)
      .join("&")}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const user = (await res.json()) || [];
  return user;
}

/**
 *
 */
export default async function Page({
  params: { id },
}: {
  params: { id: number[] };
}) {
  const users = await getUserInfo(id);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl mb-10">User Search List</h1>
      <ul>
        {users.map((e, index) => (
          <li key={`${index}_user_item`}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
