import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
       <Image
          src="/assets/icons/curalogo.png"
          height={3000}
          width={3000}
          alt="patient"
          className="mb-12 h-20 w-fit"
        
       />
       
        </div>
      </section>
   
    </div>
  );
}
