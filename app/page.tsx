import { fetchUsers } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList />
      </Suspense>
    </main>
  );
}

async function UserList() {
  const users = await fetchUsers();
  return (
    <div className="flex gap-8 flex-wrap">
      {users.map((user) => (
        <div key={user.id} className="p-5">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <button className="px-3 py-1 bg-black text-white rounded-lg mt-5">
            <Link href={`/user/${user.id}`}>View</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
