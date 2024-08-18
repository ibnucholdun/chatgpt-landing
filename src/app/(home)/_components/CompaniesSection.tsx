import Image from "next/image";
import React from "react";

type Props = {};

const companyLogos = [
  { src: "/images/logo/google.png", alt: "Google logo" },
  { src: "/images/logo/slack.png", alt: "Slack logo" },
  { src: "/images/logo/atlassian.png", alt: "Atlassian logo" },
  { src: "/images/logo/dropbox.png", alt: "Dropbox logo" },
  { src: "/images/logo/shopify.png", alt: "Shopify logo" },
];

const CompaniesSection: React.FC<Props> = () => {
  return (
    <section className="flex justify-center lg:gap-x-24 lg:my-24 flex-wrap gap-5 my-12">
      {companyLogos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={100}
          height={100}
          className="lg:w-[100px] w-[70px]"
        />
      ))}
    </section>
  );
};

export default CompaniesSection;
