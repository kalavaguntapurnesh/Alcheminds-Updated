import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <footer className="text-base">
        <div className="w-full max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mb-8 border-b border-blue-300">
            <div className="grid grid-cols-2 md:grid-cols-5 xl:col-span-2 md:gap-8">
              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-medium tracking-wider uppercase">
                  Product
                </h4>
                <ul className="pl-0 mt-4 space-y-4 list-none">
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Conditions
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Alternatives
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Status
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Whats New?
                  </li>

                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Why Us?
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-medium tracking-wider uppercase">
                  Solutions
                </h4>
                <ul className="pl-0 mt-4 space-y-4 list-none">
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Marketing
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Portals
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Security
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Commerce
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Goals
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-medium tracking-wider uppercase">
                  Support
                </h4>
                <ul className="pl-0 mt-4 space-y-4 list-none">
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Pricing
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Contact
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Guides
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Insights
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Analytics
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-medium tracking-wider uppercase">
                  company
                </h4>
                <ul className="pl-0 mt-4 space-y-4 list-none">
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    About Us
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Privacy
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Openings
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Our Blogs
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-base leading-6 "
                    ></a>
                    Guides
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0  md:block hidden">
              <h4 className="text-sm leading-5 font-medium tracking-wider uppercase text-center">
                  Alcheminds
                </h4>
                <div className="flex justify-center items-center pt-4">
                  <Image
                    src="/logo_copy.png"
                    alt=""
                    width={110}
                    height={110}
                    
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <div className=" grid grid-cols-4 gap-5 justify-center items-center place-items-center">
                <Link href="/about">
                  <FaFacebook size={25} className="cursor-pointer" />
                </Link>
                <Link href="/about">
                  <FaLinkedin size={25} className="cursor-pointer" />
                </Link>

                <Link href="/about">
                  <FaInstagram size={25} className="cursor-pointer" />
                </Link>
                <Link href="/about">
                  <FaXTwitter size={25} className="cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className=" flex items-center justify-center md:text-sm text-[11px] md:mt-0 mt-4 font-medium">
              Copyright © 2023 Alcheminds Solutions Pvt. Ltd. All rights
              reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
