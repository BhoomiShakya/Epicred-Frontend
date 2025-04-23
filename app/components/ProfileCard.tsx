"use client";
import { useUser } from "@/app/context/UserContext";

export default function ProfileCard() {
  const { user, setUser } = useUser();

  return (
    <div className="p-4 border rounded-xl">
      <h2 className="text-xl font-semibold">👤 User Info</h2>
      {user ? (
        <>
          <p>User ID: {user.userId}</p>
          <p>Name: {user.name}</p>
        </>
      ) : (
        <button
          onClick={() => setUser({ userId: "123", name: "Bhoomi Shakya" })}
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
        >
          Set User
        </button>
      )}
    </div>
  );
}
