import React from 'react'
import { Link } from "lucide-react";

import Image from "next/image";
import RegisterForm from '@/components/ui/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.action';


/*function page() {*/
const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
      <Image
src="/assets/icons/curaslogo.png"
height={3000}
width={3000}
alt="patient"
className="mb-8 h-20 w-20 rounded-3xl object-cover "
/>

<RegisterForm user={user} />
      
      <div className="text-14-regular text-white mt-20 flex justify-between">
       <p className="justify-items-end  text-dark-600 xl:text-left">
       © 2025 Curaconnet
        </p>
        <Link href="/?admin=true" className="text-green-500">
        Admin
        </Link>
      </div>
     
      </div>
    </section>

    <Image

        src="/assets/images/network.jpg"
        height={800}
        width={100000}
        alt="patient"
        className="side-img max-w-[45%] h-auto "

        />
 
  </div>
  )
}
export default Register;

/*export default page*/