async function fetchUsers() {
  return fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => data.data);
}

export default fetchUsers;