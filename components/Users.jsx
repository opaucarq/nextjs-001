"use client";
import Link from "next/link";

function Users({ users }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <Link href={`/users/${user.id}`}>
          <li className="bg-slate-400 mb-2 rounded-xl text-black flex justify-between">
            <div className="flex flex-col justify-center pl-1">
              <h3 className="font-bold">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-slate-100">{user.email}</p>
            </div>
            <img
              src={user.avatar}
              className="h-max rounded-br-xl rounded-tr-xl"
            ></img>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
