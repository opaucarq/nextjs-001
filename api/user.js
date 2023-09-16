async function fetchUser(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
}

export default fetchUser;