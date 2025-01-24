import { Button } from "@/components/ui/button";
import PatientF from "@/components/ui/forms/PatientF";
import { Link } from "lucide-react";

import Image from "next/image";


export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        <Image
  src="/assets/icons/curaslogo.png"
  height={3000}
  width={3000}
  alt="patient"
  className="mb-10 h-20 w-20 rounded-3xl object-cover "
/>
        <PatientF/>
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

          src="/assets/images/wp2655100.webp"
          height={800}
          width={100000}
          alt="patient"
          className="side-img max-w-[49%] h-auto "

          />
   
    </div>
  );
}
