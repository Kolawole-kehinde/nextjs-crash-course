import { revalidatePath } from "next/cache";

type MockUser = {
  id: number,
  name: string,
}

const MockUser = async () => {
  const response = await fetch("https://6870df837ca4d06b34b87113.mockapi.io/users");
  const users = await response.json();

 const addUser = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");

  const response = await fetch("https://6870df837ca4d06b34b87113.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const newUser = await response.json();
  revalidatePath("/mock-users");
  console.log(newUser);
};

  return (
    <div className="py-10">
       <form action={addUser} className="mb-4">
          <input type="text" name="name" required className="border p-2 mr-2"/>
           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Add User</button>
       </form>

    <div className='grid grid-cols-4 p-4 gap-6'>
      {users?.map((user: MockUser) => (
        <li key={user.id} className='p-4 bg-white shadow-lg rounded-lg text-gray-700'>
          {user.name}
        </li>
      ))}
    </div>
      </div>
  )
}

export default MockUser
