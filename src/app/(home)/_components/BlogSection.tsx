import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const blogPosts = [
  {
    src: "/images/image1.png",
    alt: "",
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
  },
  {
    src: "/images/image2.png",
    alt: "",
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
  },
  {
    src: "/images/image3.png",
    alt: "",
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
  },
  {
    src: "/images/image4.png",
    alt: "",
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
  },
  {
    src: "/images/image5.png",
    alt: "",
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
  },
];

const BlogSection: React.FC<Props> = () => {
  return (
    <section className="lg:my-44 my-16">
      <h1 className="text-gradient bg-gradient-to-r from-gradient-start to-gradient-end lg:text-6xl font-extrabold lg:leading-[75px] lg:mb-24 text-2xl mb-8">
        A lot is happening, <br className="hidden lg:block" /> We are blogging
        about it.
      </h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`w-full bg-navyTwo ${
              index === 0 ? "lg:row-span-2" : ""
            } rounded-tl-[35px]`}
          >
            <Image
              src={post.src}
              alt={post.alt}
              width={600}
              height={600}
              className={`w-full ${
                index === 0 ? "lg:h-[250px] h-[125px]" : "h-[130px]"
              } object-cover`}
            />
            <div
              className={`p-5 flex flex-col justify-between ${
                index === 0
                  ? "lg:h-[calc(100%-250px)]"
                  : "lg:h-[calc(100%-130px)]"
              }`}
            >
              <div>
                <p className="text-xs">{post.date}</p>
                <h4
                  className={`text-xl font-extrabold ${
                    index === 0 ? "lg:text-2xl lg:mt-5 mt-3" : "mt-5 mb-5"
                  }`}
                >
                  {post.title}
                </h4>
              </div>
              <Link href="#" className="lg:mt-auto mt-5">
                Read Full Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
