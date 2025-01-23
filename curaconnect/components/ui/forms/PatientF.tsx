"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField from "./CustomFormField";
import Submitbuttom from "../Submitbuttom";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}


// 1. Define the validation schema


export function PatientF() {
  const router = useRouter();
  const [isLoading,setisLoading]=useState(false)
  // 2. Initialize the form with useForm
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setisLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };
      const newUser = await createUser(user);
      if (newUser) {
        router.push('/patients/${newUser.$id}/register');
      }
    } catch (error) {
      console.log(error);
    }

    setisLoading(false);
  };
      

  return (
    <Form {...form}>

    <form
      onSubmit={form.handleSubmit(onSubmit)}
      
      className="space-y-8 p-6 rounded-2xl bg-gray-700 shadow-lg"
    >
      <section className="flex flex-col items-center justify-start mt-10">
    <h1 className="text-2xl font-bold text-center">
      Hi There 👋<br />
      Welcome to Cura
    </h1>
    <p className="text-gray-500 mt-2 items-start">Schedule your first appointment</p>
  </section>
     
     < CustomFormField
        fieldType={FormFieldType.INPUT}
       control={form.control}
       name='name'
       label="Full name"
       placeholder="wihansa"
       iconAlt="user"
      />
      <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="phone number"
          
        />

    <Submitbuttom isLoading={isLoading}>Get Started</Submitbuttom>
  </form>

   

</Form>

  );
}

export default PatientF;
function createUser(user: { name: string; email: string; phone: string; }) {
  throw new Error("Function not implemented.");
}

