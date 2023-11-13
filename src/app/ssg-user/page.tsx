"use server";

import { User } from "@/types/userType";

export default async function UserPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users" );

  const users: User[] = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl mb-10">
        User - {new Date().toLocaleTimeString()}
      </h1>
      <ul>
        {users.map((e, index) => (
          <li key={`${index}_user_item`}>{e.name}</li>
        ))}
      </ul>
    </main>
  );
}
