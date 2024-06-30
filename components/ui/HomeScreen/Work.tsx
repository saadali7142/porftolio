"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide as Slide } from "swiper/react";

import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../button";
import ProjectCard, { IProject } from "../shared/ProjectCard";
import { Pagination } from "swiper/modules";
import Loader from "../shared/Loader";

const projectData = [
  {
    id: "1",
    imageUrl: "/work/3.png",
    category: "",
    name: "CXP-WP",
    description:
      "It is customer experience portal app with integrated e-commerce store",
    link: "/",
    github: "/",
  },

  {
    id: "3",
    imageUrl:
      "https://www.flowgear.net/wp-content/uploads/2019/03/dynamics-365-logo-1.png",
    category: "next js",
    name: "Dobbies Gardens",
    description:
      "An e-commerce store for plants and accessories built using dynamics 365 commerce",
    link: "/",
    github: "/",
  },
  {
    id: "4",
    imageUrl: "/work/1.png",
    category: "",
    name: "Learn & Earn",
    description:
      "Online Quiz based learning and earning program app for teachers and students",
    link: "/",
    github: "/",
  },
  {
    id: "5",
    imageUrl: "/work/3.png",
    category: "",
    name: "K2 Dashboard",
    description:
      "It is a framework for creating dashboards which requires minimal customizations and with variety of reusable components",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);

  const getProject = async () => {
    setLoading(true);
    setProjects([]);

    const response = await fetch(`api/projects`);
    const project = await response.json();
    setProjects(project);
    setLoading(false);
  };

  useEffect(() => {
    getProject();
  }, []);
  return (
    <>
      <section id="work" className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
          {/* text */}

          <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Projects</h2>
            <p className="subtitle mmb-8">
              Explore my recent projects showcasing innovative solutions and
              creative designs.
            </p>
            {/* <Link href="/projects">
              <Button>All Projects</Button>
            </Link> */}
          </div>
          {/* slider */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <SwiperComponent
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only first 4 projects */}
              {projectData.slice(0, 4).map((project, index: number) => {
                return (
                  <Slide key={index}>
                    <ProjectCard project={project} />
                  </Slide>
                );
              })}
            </SwiperComponent>
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default Work;
