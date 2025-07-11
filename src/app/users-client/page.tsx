 "use client"
import React, { useEffect, useState } from 'react'

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
}

const UserClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to fetch users: ${e.message}`);
        } else {
          setError("Failed to fetch users");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <ul className='p-4 space-y-4'>
      {users.map((user: User) => (
        <li key={user.id} className='p-4 bg-white shadow-lg rounded-lg text-gray-700'>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UserClient
