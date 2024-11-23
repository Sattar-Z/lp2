"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Medal, Star, Users, BookOpen, Trophy, Smile } from 'lucide-react';

const CoachesSection = () => {
  const [activeTab, setActiveTab] = useState('team');

  const coachingTeam = [
    {
      id: 1,
      name: "Coach Name",
      role: "Head Coach & Academy Director",
      qualifications: ["UEFA B Licensed", "FA Youth Award", "First Aid Certified"],
      experience: "15+ years developing youth talent",
      specialties: ["Player Development", "Team Strategy", "Technical Skills"],
      achievements: [
        "Developed 5 players who reached professional level",
        "Won Regional Youth Cup 2023",
        "Former Professional Player"
      ]
    },
    {
      id: 2,
      name: "Coach Name",
      role: "Head Coach & Academy Director",
      qualifications: ["UEFA B Licensed", "FA Youth Award", "First Aid Certified"],
      experience: "15+ years developing youth talent",
      specialties: ["Player Development", "Team Strategy", "Technical Skills"],
      achievements: [
        "Developed 5 players who reached professional level",
        "Won Regional Youth Cup 2023",
        "Former Professional Player"
      ]
    },
    {
      id: 3,
      name: "Coach Name",
      role: "Head Coach & Academy Director",
      qualifications: ["UEFA B Licensed", "FA Youth Award", "First Aid Certified"],
      experience: "15+ years developing youth talent",
      specialties: ["Player Development", "Team Strategy", "Technical Skills"],
      achievements: [
        "Developed 5 players who reached professional level",
        "Won Regional Youth Cup 2023",
        "Former Professional Player"
      ]
    },
  ];

  const stats = [
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "50+",
      label: "Trophies Won"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "1000+",
      label: "Players Coached"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      value: "25+",
      label: "Years Combined Experience"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "15+",
      label: "Professional Players Developed"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Meet Our Expert Coaching Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our UEFA-qualified coaches bring passion, expertise, and dedication to developing the next generation of football talent.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center"
            >
              <div className="flex justify-center text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Tabs */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'team'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              } transition-colors`}
            >
              Coaching Team
            </button>
            <button
              onClick={() => setActiveTab('action')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'action'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              } transition-colors`}
            >
              In Action
            </button>
          </div>

          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            {activeTab === 'team' ? (
              <Image
                src="/images/team/coaches.jpeg"
                alt="Our coaching team"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
              />
            ) : (
              <div className="grid grid-cols-2 gap-4 h-full">
                <Image
                  src="/images/team/team01(U10s).jpeg"
                  alt="Coaches working with teams"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                />
                <Image
                  src="/images/team/team03(U9s).jpeg"
                  alt="Coaches working with teams"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                />
              </div>
            )}
          </div>
        </div>

        {/* Coaching Philosophy */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Philosophy</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in developing complete players through a holistic approach that combines technical skills, tactical understanding, and character development.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Approach</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Individual attention combined with team development ensures every player reaches their full potential while learning valuable life skills.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Smile className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Promise</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We create a positive, encouraging environment where players can grow in confidence, make friends, and develop their love for football.
            </p>
          </div>
        </div>

        {/* Individual Coach Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachingTeam.map((coach) => (
            <div 
              key={coach.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                <p className="text-primary font-medium mb-4">{coach.role}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qualifications</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300">
                      {coach.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-primary mr-2" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300">
                      {coach.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <Medal className="w-4 h-4 text-primary mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Meet Our Coaches in Person
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CoachesSection;