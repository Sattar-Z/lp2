import React from 'react';
import Image from "next/image";
import { Trophy, Users, Target, Heart, Star, Brain } from 'lucide-react';

const AboutSectionOne = () => {
  const features = [
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: "Learn Like Champions",
      description: "Professional coaching using Premier League academy methods"
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Make Friends for Life",
      description: "Build lasting friendships with teammates who share your passion"
    },
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      title: "Achieve Your Goals",
      description: "Personalized development plans for every young player"
    },
    {
      icon: <Heart className="w-5 h-5 text-primary" />,
      title: "Stay Healthy & Active",
      description: "Focus on fitness, nutrition, and overall wellbeing"
    },
    {
      icon: <Star className="w-5 h-5 text-primary" />,
      title: "Show Your Skills",
      description: "Regular matches and tournaments to showcase talent"
    },
    {
      icon: <Brain className="w-5 h-5 text-primary" />,
      title: "Develop Character",
      description: "Learn teamwork, discipline, and leadership skills"
    }
  ];

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center flex-col-reverse lg:flex-row">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl"
                style={{
                  fontFamily: "'Mogra', cursive",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
                >
                  Where Young Stars Shine Bright!
                </h2>
                <p className="text-lg text-body-color dark:text-gray-300">
                  At Storm Elite Football Club, we believe every young player has the potential 
                  to become extraordinary. Our academy combines fun, friendship, and professional 
                  training to help your child grow both on and off the pitch.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <h3 className="ml-2 font-semibold text-dark dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-body-color dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/team/team06(U9s).jpeg"
                  alt="Team huddle showing unity and team spirit"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg">
                  <p className="font-bold">Join Our Family</p>
                  <p className="text-sm">Ages 7-13 Welcome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;