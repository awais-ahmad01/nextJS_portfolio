"use client"
import type React from "react"
import { emailIcon, questionMarkIcon } from "@/app/assets/assets"
import SectionHeading from "@/components/SectionHeading"
import { faqData } from "@/data"
// import Button from "@/components/ui/Button"
// import { Calendar1, Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm/ContactForm"
import FAQ from "@/components/FAQ/FAQ"

export default function ContactPage() {
  return (
    <div className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full ">
     
        <SectionHeading
          icon={emailIcon}
          title="Contact Me"
          description="I Love to hear from you. Let's Create Something Amazing Together!"
        >
          {/* <div className="w-full ">
            <div className="flex  items-start flex-none flex-nowrap  w-full gap-5 h-min justify-start p-0 relative">
              <Button position='left' className="w-min" icon={<Mail size={18} />} title='Email Me' />
              <Button position='left' className="w-min" icon={<Calendar1 size={18} />} title='Schedule Call' />
            </div>
          </div> */}
        </SectionHeading>

        <ContactForm />

       <div className="mt-12">
         <SectionHeading
          icon={questionMarkIcon}
          title="Common Queries"
          description="Get Answers to Common Queries. Your Questions, Addressed Simply."
        />

        <FAQ data={faqData} />
       </div>

      </div>
   
  )
}

