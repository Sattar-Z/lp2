import React from "react";
import Image from "next/image";
import { Users, Award, Clock, Activity } from "lucide-react";

const AboutSectionTwo = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "200+",
      label: "Young Players",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "15+",
      label: "Tournaments Won",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "12",
      label: "Training Hours/Week",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: "98%",
      label: "Player Satisfaction",
    },
  ];

  const features = [
    {
      title: "Elite Development Program",
      description: "Our coaches create personalized training plans for every player, focusing on technical skills, tactical understanding, and physical development.",
      highlights: ["Individual skill assessment", "Performance tracking", "Video analysis sessions"]
    },
    {
      title: "Supportive Environment",
      description: "We create a positive, encouraging atmosphere where young players can grow confident, make friends, and develop their love for football.",
      highlights: ["Dedicated mentoring", "Team building activities", "Mental health support"]
    },
    // {
    //   title: "Professional Pathway",
    //   description: "Connect with professional clubs through our network of scouts and partnerships with Premier League academies.",
    //   highlights: ["Regular showcase events", "Pro club trials", "Career guidance"]
    // }
  ];

  const testimonial = {
    quote: "Storm Elite has transformed my son's confidence both on and off the pitch. The coaches truly care about each player's development.",
    author: "Sarah Johnson",
    role: "Parent of Tom, U13s"
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px] lg:mr-0">
              <Image
                src="/images/team/team10(U9s).jpeg"
                alt="Young players in training"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center text-primary mb-2">
                        {stat.icon}
                      </div>
                      <div className="font-bold text-xl text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 mt-20 lg:mt-0">
            <div className="max-w-[670px]">
              {features.map((feature, index) => (
                <div key={index} className="mb-9 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{
                    fontFamily: "'Mogra', cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg sm:leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Testimonial */}
              <div className="mt-8 bg-primary/5 dark:bg-primary/10 p-6 rounded-xl relative">
                <div className="text-5xl text-primary/20 absolute top-4 left-4">&quot;</div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <strong>{testimonial.author}</strong> - {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;