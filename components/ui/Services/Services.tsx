import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I create visually appealing and user-friendly web designs that enhance user experience and engagement. My designs are tailored to meet your business needs, ensuring a professional and modern look. ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "I specialize in developing high-performance and scalable web applications using the latest technologies. From concept to deployment, I provide end-to-end solutions that cater to your specific requirements.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Api Integration",
    description:
      "I offer seamless API integration services, enabling your applications to communicate effectively with other systems. Whether it's third-party APIs or custom-built solutions, I ensure smooth and secure data exchange.",
  },
];

const Services = () => {
  return (
    <section id="services" className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid itemss */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
          {serviceData.map((item: any, index: number) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
