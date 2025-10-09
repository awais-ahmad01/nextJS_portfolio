"use client";
import { motion } from "framer-motion";
import Loader from "../ui/Loader";
import SuccessForm from "../ui/SuccessForm";
import { useState } from "react";
import { formVariants } from "@/animation/varients";
import { sendEmail } from "@/actions/nodemailer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

type ContactFormData = yup.InferType<typeof contactSchema>;

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setLoader(true);

      await sendEmail(data.name, data.email, data.message);

      reset();
      setLoader(false);
      setErrorOnSubmit(false);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      setLoader(false);
      setErrorOnSubmit(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      viewport={{ once: true }}
      className="flex flex-col w-full"
    >
      {isSubmitting ? (
        <div className="h-full min-h-[350px] w-full relative flex flex-col items-center justify-center bg-dark-gray-2 rounded-xl border border-dark-gray-3 select-none">
          {loader ? (
            <Loader />
          ) : (
            <SuccessForm action={errorOnSubmit ? "error" : "success"} />
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <input
                className={`appearance-none w-full leading-[1.4em] outline-none border ${
                  errors.name ? "border-red-500" : "border-transparent"
                } p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2`}
                placeholder="Name"
                type="text"
                aria-label="Full Name"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm font-medium px-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                className={`appearance-none w-full leading-[1.4em] outline-none border ${
                  errors.email ? "border-red-500" : "border-transparent"
                } p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2`}
                placeholder="Email"
                type="email"
                aria-label="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-medium px-1">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-1">
            <textarea
              className={`appearance-none w-full leading-[1.4em] outline-none border ${
                errors.message ? "border-red-500" : "border-transparent"
              } p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 resize-y min-h-56 max-h-96`}
              placeholder="Message"
              rows={8}
              aria-label="Message"
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-500 text-sm font-medium px-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-almost-black text-white p-4 rounded-lg font-medium hover:bg-dark-gray-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            Send Your Message
          </button>
        </form>
      )}

      <div />
    </motion.div>
  );
}