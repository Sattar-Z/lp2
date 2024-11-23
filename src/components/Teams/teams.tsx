"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Trophy, Users, Calendar, Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from './videoPlayer';

const TeamsShowcase = () => {
  const [activeTeam, setActiveTeam] = useState('U9');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);

  const teams = [
    {
      id: 'U9',
      name: 'Under 9s',
      coach: 'Coach Name',
      achievements: [
        'League Winners 2023',
        'Cup Finalists 2023',
        'Tournament Champions'
      ],
      stats: {
        gamesPlayed: 24,
        wins: 18,
        draws: 4,
        losses: 2,
        goalsFor: 72,
        goalsAgainst: 28
      },
      photos: [
        '/images/team/team03(U9s).jpeg',
        '/images/team/team06(U9s).jpeg',
        '/images/team/team09(U9).jpeg'
      ],
      videos: [
        {
          thumbnail: '/images/team/team03(U9s).jpeg',
          url: '/images/team/play01.mov',
          title: 'Season Highlights'
        }
      ],
      trainingSessions: [
        {
          day: 'Monday',
          time: '6:00 PM - 7:30 PM',
          location: 'Main Ground'
        },
        {
          day: 'Thursday',
          time: '5:00 PM - 6:30 PM',
          location: 'Training Field'
        }
      ]
    },
    {
      id: 'U10',
      name: 'Under 10s',
      coach: 'Coach Name',
      achievements: [
        'League Winners 2023',
        'Cup Finalists 2023',
        'Tournament Champions'
      ],
      stats: {
        gamesPlayed: 24,
        wins: 18,
        draws: 4,
        losses: 2,
        goalsFor: 72,
        goalsAgainst: 28
      },
      photos: [
        '/images/team/u13-team1.jpg',
        '/images/team/u13-team2.jpg',
        '/images/team/u13-team3.jpg'
      ],
      videos: [
        {
          thumbnail: '/images/team/u13-video1-thumb.jpg',
          url: '/videos/u13-highlights1.mp4',
          title: 'Season Highlights'
        }
      ],
      trainingSessions: [
        {
          day: 'Monday',
          time: '6:00 PM - 7:30 PM',
          location: 'Main Ground'
        },
        {
          day: 'Thursday',
          time: '5:00 PM - 6:30 PM',
          location: 'Training Field'
        }
      ]
    },
    {
      id: 'U13',
      name: 'Under 13s',
      coach: 'Coach Name',
      achievements: [
        'League Winners 2023',
        'Cup Finalists 2023',
        'Tournament Champions'
      ],
      stats: {
        gamesPlayed: 24,
        wins: 18,
        draws: 4,
        losses: 2,
        goalsFor: 72,
        goalsAgainst: 28
      },
      photos: [
        '/images/team/u13-team1.jpg',
        '/images/team/u13-team2.jpg',
        '/images/team/u13-team3.jpg'
      ],
      videos: [
        {
          thumbnail: '/images/team/u13-video1-thumb.jpg',
          url: '/videos/u13-highlights1.mp4',
          title: 'Season Highlights'
        }
      ],
      trainingSessions: [
        {
          day: 'Monday',
          time: '6:00 PM - 7:30 PM',
          location: 'Main Ground'
        },
        {
          day: 'Thursday',
          time: '5:00 PM - 6:30 PM',
          location: 'Training Field'
        }
      ]
    },
  ];

  const teamTabs = ['overview', 'gallery', 'videos', 'schedule'];

  const currentTeam = teams.find(team => team.id === activeTeam);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === currentTeam.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? currentTeam.photos.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-28  relative z-10 overflow-hidden pt-40 lg:pt-[280px]">
      <div className="container">
        {/* Team Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => setActiveTeam(team.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                activeTeam === team.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {team.name}
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {teamTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg capitalize ${
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Team Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {currentTeam.stats.wins}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Wins
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {currentTeam.stats.goalsFor}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Goals Scored
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Recent Achievements</h4>
                  <ul className="space-y-2">
                    {currentTeam.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <Trophy className="w-4 h-4 text-primary mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Training Schedule</h3>
                {currentTeam.trainingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-start mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <Calendar className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="font-semibold">{session.day}</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {session.time}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {session.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="relative">
              <div className="relative aspect-video max-w-4xl mx-auto">
                <Image
                  src={currentTeam.photos[currentSlide]}
                  alt={`${currentTeam.name} team photo`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex justify-center mt-4">
                {currentTeam.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                      currentSlide === index
                        ? 'bg-primary'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTeam.videos.map((video, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
              >
                <VideoPlayer video={video} />
              </div>
            ))}
          </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Training Schedule</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentTeam.trainingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-primary mr-3" />
                      <h4 className="text-xl font-semibold">{session.day}</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        Time: {session.time}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Location: {session.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamsShowcase;