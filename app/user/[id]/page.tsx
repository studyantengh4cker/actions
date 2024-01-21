import { fetchUser } from "@/lib/actions/user.actions";
import Link from "next/link";

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);
  return (
    <div className="w-full h-screen p-20">
      <button className="px-3 py-1 bg-black text-white rounded-lg mb-5">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-5xl font-bold">{user?.username}</h1>
      <p>{user?.address}</p>
      <p>{user?.email}</p>
    </div>
  );
}
