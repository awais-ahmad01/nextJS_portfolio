"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { flyIcon, linkIcon, rightArrow } from "@/app/assets/assets";
import Image from "next/image";
import { myShowCases } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 gap-0 h-min overflow-hidden p-0 relative w-full items-center justify-start">
      <div className="gap-[60px] flex-col max-w-full w-full lg:max-w-[750px] px-5 lg:px-0 lg:w-[80%] flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-visible p-[40px_0px] md:p-[80px_0px]   ">
        <div className="flex-none h-auto relative w-full">
          <SectionHeading
            title="Featured Projects"
            icon={flyIcon}
            description="Innovative web applications showcasing modern technologies and best practices."
          />
        </div>

        <div className="flex items-start flex-none flex-wrap gap-[10px] h-min justify-start overflow-visible p-0 relative w-full">
          {myShowCases?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
              }}
              className="flex-none h-auto relative w-full "
              key={item.id}
            >
              <div className="bg-very-dark-gray w-full border border-dark-gray-3 rounded-xl flex items-center flex-nowrap flex-col lg:flex-row  gap-5 h-min justify-start overflow-visible p-4 lg:p-[8px_24px_8px_8px] relative ">
                <div className="lg:flex-1 w-full rounded-xl h-[180px] relative ">
                  <figure className="lg:absolute relative h-full w-full inset-0 rounded-xl ">
                    <Image
                      src={item.image}
                      className="w-full block h-full rounded-[inherit] object-cover object-center "
                      height={180}
                      width={180}
                      alt={item.title}
                    />
                  </figure>
                </div>

                <div className="flex items-start flex-1 flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-0 relative w-full min-w-0">
                  <div className="flex items-start flex-1 flex-col flex-nowrap gap-4 h-min justify-start overflow-visible p-0 relative w-full">
                    <div className="flex flex-col items-start flex-none flex-nowrap gap-3 h-min justify-start overflow-visible p-0 relative w-full">
                      <div className="w-full h-auto relative justify-start flex-shrink-0">
                        <h3 className="font-bold text-white text-[20px] sm:text-[22px] leading-[1.2em] whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex-none h-auto relative w-full sm:w-auto">
                        <Link
                          href={"https://" + item.link}
                          target="_blank"
                          className="bg-almost-black border border-dark-gray-4 flex cursor-pointer items-center flex-nowrap gap-[6px] h-min justify-center overflow-hidden relative w-full sm:w-min rounded-lg custom-padding group hover:bg-dark-gray-4 transition-all duration-500 px-3 py-2"
                        >
                          <div className="opacity-70 aspect-square h-auto overflow-visible w-5 relative flex-none group-hover:opacity-100 duration-500 transition-all">
                            <figure className="absolute inset-0 w-full h-full rounded-[inherit] ">
                              <Image
                                src={linkIcon}
                                alt="Link icon"
                                className="block w-full h-full object-cover object-center rounded-[inherit] "
                                height={20}
                                width={20}
                              />
                            </figure>
                          </div>

                          <div className="flex-none h-auto relative w-auto flex flex-col flex-shrink-0 opacity-70 group-hover:opacity-100 transition-all duration-500 min-w-0 overflow-hidden">
                            <p className="text-light-gray-3 font-medium leading-[100%] text-[13px] sm:text-[15px] truncate">
                              {item.link}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words ">
                    <p className="text-[14px] sm:text-[15px] font-medium text-light-gray-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}