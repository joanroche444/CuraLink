"use client";

import React, { useState } from "react";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Ensure zod is imported
 // Corrected SubmitButton case
import { UserFormValidation } from "@/lib/validation";
import Submitbuttom from "../Submitbuttom";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { GenderOptions } from "@/constants";

const RegisterForm = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with useForm
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      console.log("Form submitted with values:", values);
      // Add submission logic here (e.g., API call)
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-2 rounded-2xl bg-black-700 "
      >
        {/* Header */}
        <section className="flex flex-col items-center justify-start ">
          <h1 className="text-2xl font-bold text-center">
          
            Registration
          </h1>
          <p className="text-gray-500 mt-2">Fill in the required details</p>
        </section>

        <section className="flex flex-col items-start justify-start ">
  <h2 className="text-2xl font-bold text-left">
    Personal Information
  </h2>
</section>
          
        
        <div className="space-y-4">
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="Your name here"
        iconAlt="user"
      />

      {/* Email and Phone Fields */}
      <div className="flex gap-4">
        <div className="flex-1 rounded-lg">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
        </div>
        <div className="flex-1 rounded-lg">
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Address Field */}
      <div className="rounded-lg">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="address"
          label="Address"
          placeholder="Enter your address"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
      </div>
      <div className="space-y-4">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

      <section className="flex flex-col items-start justify-start mt-10">
  <h2 className="text-2xl font-bold text-left">
    Medical Information
  </h2>
</section>

        {/* Submit Button */}
     
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
