"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { socialBrands } from "@/data/index";
import Marquee from "react-fast-marquee";

export default function Brandcontainer() {
  return (
    <div className="flex flex-none flex-nowrap gap-[30px] h-min overflow-hidden relative w-full p-[0px_0px_10px] pt-10">
      <section className="maskImage w-full max-w-full p-[10px] max-h-full flex overflow-hidden justify-between">
        <Marquee className="gap-7 w-full" autoFill>
          <ul className="flex flex-shrink-0 w-full h-full max-w-full max-h-full place-items-center ml-20 p-0 gap-7 relative ">
            {socialBrands.map((brand) => (
              <li key={brand.id} className="h-full w-full">
                <Link
                  className="cursor-pointer h-[45px] relative block flex-shrink-0 overflow-hidden w-[80px]"
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute flex-shrink-0 top-0 left-0 right-0 bottom-0 rounded-[inherit] flex items-center justify-center p-2">
                    {typeof brand.logo === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: brand.logo }} />
                    ) : (
                      <Image
                        src={brand.logo}
                        alt={brand.title || "brand logo"}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Marquee>
      </section>
    </div>
  );
}
