 "use client"
import { useRouter } from "next/navigation";


const About = () => {
    const router = useRouter();
  return (
    <div>
       <h1>About Us</h1>
       <button
       onClick={() => router.push("/")}
       className="bg-blue-500 text-white p-4">Go home</button>
    </div>
  )
}

export default About
