import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="lg:flex justify-between items-center lg:mt-10 mt-3">
      <div className="lg:w-1/2 lg:flex flex-col gap-y-10">
        <h1 className="text-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:text-6xl font-bold lg:leading-[80px] text-3xl mb-3">
          Let&apos;s Build Something amazing with GPT-3 <br />
          OpenAI
        </h1>
        <p className="lg:text-lg text-[#81AFDD] lg:w-3/4 text-sm">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="flex mt-5">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-2/3 bg-navyTwo outline-none lg:p-5 p-3 rounded-tl-xl rounded-bl-xl text-sm lg:text-base"
          />
          <button className="bg-orangeTwo lg:p-5 p-3  text-white rounded-tr-xl rounded-br-xl text-sm lg:text-base">
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-x-5 mt-5">
          <Image
            src="/images/user-group.png"
            alt="hero"
            width={550}
            height={550}
            className="w-[180px] h-10"
          />
          <p className="lg:text-sm text-xs">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <Image
          src="/images/hero-image.png"
          alt="hero"
          width={900}
          height={900}
          className="w-[660px] h-[700px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
