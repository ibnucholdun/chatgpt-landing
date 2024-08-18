import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const FeatureSection: React.FC<Props> = () => {
  const features = [
    {
      title: "Improving end distrusts instantly",
      content:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      content:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      content:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      content:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <section className="lg:my-44 my-26 relative overflow-hidden lg:block">
      <div className="lg:flex justify-between gap-x-44">
        <div className="lg:w-2/5 mb-10">
          <h1 className="font-extrabold lg:text-4xl text-xl text-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:leading-[45px]">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="lg:text-base text-sm text-orangeTwo lg:mt-10 mt-5">
            Request Early Access to Get Started
          </p>
        </div>

        <div className="lg:w-2/5 flex flex-col gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-2 gap-x-8">
              <div className="flex flex-col gap-y-2">
                <hr className="hr-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:w-16 w-8 border-3" />
                <h2 className="font-extrabold lg:text-lg text-base">
                  {feature.title}
                </h2>
              </div>
              <p className="lg:text-sm w-full text-xs">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:my-16 my-8 lg:grid grid-cols-2 justify-center items-center gap-x-10">
        <div className="lg:pl-24 mb-10">
          <Image
            src="/images/feature-image.png"
            alt="Feature illustration"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col lg:gap-y-8 gap-y-4">
          <p className="lg:text-base text-sm text-[#71E5FF]">
            Request Early Access to Get Started
          </p>
          <h3 className="text-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:text-4xl text-xl font-extrabold lg:leading-[45px]">
            The possibilities are <br className="hidden lg:block" />
            beyond your imagination
          </h3>
          <p className="lg:text-base text-sm text-[#81AFDD] lg:w-3/4">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-orangeTwo lg:text-base text-sm">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
