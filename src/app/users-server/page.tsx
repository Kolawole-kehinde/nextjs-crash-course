type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
}

const UserServer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000) )
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <ul className='p-4 space-y-4'>
      {users?.map((user: User) => (
        <li key={user.id} className='p-4 bg-white shadow-lg rounded-lg text-gray-700'>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UserServer
