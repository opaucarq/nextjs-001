import React from "react";

function UserCard({ user }) {
  return (
    <div className="bg-slate-400 p-10 rounded-md ">
      <img src={user.avatar} alt="" className="m-auto" />
      <h5 className="text-3xl font-bold">
        {user.first_name} {user.last_name}
      </h5>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;
