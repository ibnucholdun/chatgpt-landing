import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterSection: React.FC<Props> = () => {
  const links = [
    { title: "Overons", href: "#" },
    { title: "Social Media", href: "#" },
    { title: "Counters", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const companyLinks = [
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const contactInfo = [
    { title: "Crechterwoord K12 182 DK Alknjkcb", href: "#" },
    { title: "085-132567", href: "#" },
    { title: "info@payme.net", href: "#" },
  ];

  return (
    <div className="bg-navyThree lg:block">
      <section className="lg:pt-32 p-12 flex flex-col items-center text-center">
        <h1 className="text-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:text-6xl text-2xl font-extrabold lg:leading-[75px] lg:mb-20 mb-6">
          Do you want to step into the <br className="hidden lg:block" />
          future before others
        </h1>
        <Button
          variant="outline"
          className="bg-transparent px-10 py-7 hidden lg:inline-flex"
          size="lg"
        >
          Request Early Access
        </Button>
        <Button
          variant="outline"
          className="bg-transparent lg:hidden"
          size="sm"
        >
          Request Early Access
        </Button>
      </section>

      <footer className="py-12 lg:py-44 w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-y-16 gap-y-8">
          <div className="lg:col-span-2 flex flex-col lg:gap-y-8 gap-y-2">
            <h1 className="lg:text-4xl text-2xl font-extrabold">GPT-3</h1>
            <p className="lg:text-base text-sm lg:w-2/5">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col lg:gap-y-8 gap-y-2">
            <p className="lg:text-lg text-base font-semibold">Links</p>
            <div className="flex flex-col lg:gap-y-3 gap-y-1">
              {links.map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col lg:gap-y-8 gap-y-2">
            <p className="lg:text-lg text-base font-semibold">Company</p>
            <div className="flex flex-col lg:gap-y-3 gap-y-1">
              {companyLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col lg:gap-y-8 gap-y-2">
            <p className="lg:text-lg text-base font-semibold">Get in touch</p>
            <div className="flex flex-col lg:gap-y-3 gap-y-1 lg:w-3/4">
              {contactInfo.map((info) => (
                <Link key={info.title} href={info.href}>
                  {info.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
