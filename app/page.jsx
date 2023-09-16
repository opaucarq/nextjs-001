import Users from "@/components/Users";
import fetchUsers from "@/api/users";

export default async function Home() {
  const users = await fetchUsers();

  return <Users users={users} />;
}
