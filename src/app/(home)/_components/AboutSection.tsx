import React from "react";

type Props = {};

const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => (
  <h2 className={`font-extrabold lg:text-2xl text-lg ${className}`}>{title}</h2>
);

const SectionContent: React.FC<{ content: string }> = ({ content }) => (
  <p className="lg:text-base lg:leading-[30px] text-xs">{content}</p>
);

const AboutSection: React.FC<Props> = () => {
  const infoBlocks = [
    {
      title: "Chatbots",
      content:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      title: "Knowledgebase",
      content:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      content:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  return (
    <section className="lg:my-24 relative lg:block my-12">
      <div className="bg-navyTwo lg:p-24 p-5 relative overflow-hidden">
        <div className="w-[600px] bg-[#1B78DE] h-[600px] absolute -right-[400px] -bottom-[400px] blur-3xl rounded-full hidden lg:block" />
        <div className="w-[600px] bg-[#1B78DE] h-[600px] absolute -left-[400px] -top-[400px] blur-3xl rounded-full hidden lg:block" />

        <hr className="hr-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:w-16 w-8 border-3" />

        <div className="flex justify-between lg:mt-5 mt-2 lg:gap-x-44 gap-x-3">
          <SectionTitle title="What is GPT-3" className="w-[600px]" />
          <SectionContent content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>

        <div className="flex justify-between lg:my-24 my-8">
          <h1 className="font-extrabold lg:text-4xl text-lg text-gradient bg-gradient-to-r from-gradient-start to-gradient-end w-3/4 lg:w-full">
            The possibilities are beyond <br className="hidden lg:block" /> your
            imagination
          </h1>
          <p className="text-orangeTwo text-right text-xs lg:text-base w-1/4 lg:w-full">
            Explore The Library
          </p>
        </div>

        <div className="lg:flex justify-between items-center gap-x-10">
          {infoBlocks.map((block, index) => (
            <div key={index} className="w-[300px] mb-8">
              <hr className="hr-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:w-16 w-8 border-3 lg:mb-5 mb-2" />
              <SectionTitle title={block.title} />
              <SectionContent content={block.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
