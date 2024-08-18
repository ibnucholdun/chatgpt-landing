import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const CallToActionSection = (props: Props) => {
  return (
    <section className="lg:my-44 my-12 lg:block">
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end lg:px-10 lg:py-16 px-5 py-8 rounded-xl text-black">
        <p className="lg:text-sm text-xs mb-3 text-center lg:text-left">
          Request Early Access to Get Started
        </p>
        <div className="flex lg:justify-between justify-center flex-col lg:flex-row items-center  w-full">
          <p className="lg:text-2xl text-lg font-extrabold leading-[25px] lg:leading-[32px]">
            Register today & start exploring the endless possiblities.
          </p>
          <Button className="rounded-full hidden lg:block" size={"lg"}>
            Get Started
          </Button>
          <Button className="rounded-full lg:hidden mt-5" size={"sm"}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
