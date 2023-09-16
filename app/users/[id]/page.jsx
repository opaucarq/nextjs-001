import UserCard from "@/components/UserCard";
import fetchUser from "@/api/user";

async function UserPage({ params }) {
  const user = await fetchUser(params.id);
  return <UserCard user={user} />;
}

export default UserPage;
