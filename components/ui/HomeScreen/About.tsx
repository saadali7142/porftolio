"use client";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import DevImg from "./DevImg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Syed Saad",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 3364973745",
  },
  {
    icon: <MailIcon size={20} />,
    text: "saadali7142@gmail.com",
  },

  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors in Computer Science",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "UOG Sialkot",
        qualification: "Bachelors in Computer Science",
        year: "2017 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Systems Limited",
        role: "Senior Software Engineer",
        year: "2022 - Present",
      },
      {
        company: "Karigar Web Solutions",
        role: "Junior Javascript Developer",
        year: "2020 - 2022",
      },
      {
        company: "Emumba",
        role: "Markup Engineer Internee",
        year: "2018 - 2019",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "Front-end Development" },
      { name: "HTML5, CSS3" },
      { name: "NextJS, ReactJS" },
      { name: "Javascript, Typescript" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
      { imgPath: "/about/figma.svg" },
    ],
  },
];
const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section id="about" className="mb-12 xl:mb-48">
      <div className="  container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className=" hidden xl:flex flex-1  relative">
            <DevImg
              imageStyle="rounded-b-full !h-[80%] !w-[70%] mx-auto mt-12 flex justify-center items-center"
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] justify-center items-center bg-no-repeat relative"
              imgSrc="/hero/dev4.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  {" "}
                  Qualification{" "}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  {" "}
                  Skills{" "}
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className=" text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 3 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border"></div>
                      <div> English, Urdu</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: number) => {
                              const { company, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leadin-none mb-2">
                                      {company}{" "}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}{" "}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: number) => {
                              const { university, qualification, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leadin-none mb-2">
                                      {university}{" "}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}{" "}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      {/* <h4 className=" text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4> */}
                      {/* <div className="border-b border mb-4"></div> */}
                      {/* tools list  */}
                      {/* <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: number) => {
                            return (
                              <div key={index}>
                                <Image
                                  src={item.imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div> */}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
