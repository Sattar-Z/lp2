"use client"
import React, { useState } from 'react';
import { MapPin, Clock, Mail, Phone, Calendar, Users, ChevronDown } from 'lucide-react';

const TrialsSection = () => {
  const [expandedLocation, setExpandedLocation] = useState(null);

  const trialSessions = [
    {
      day: "Friday",
      time: "6:15-7:30pm",
      ageGroups: ["U8s", "U11s", "U13s", "U14s"],
      location: {
        name: "City Heights",
        address: "63 Christchurch Road",
        postcode: "SW2 3DH",
        mapUrl: "https://maps.google.com/?q=63+Christchurch+Road+SW2+3DH"
      }
    },
    {
      day: "Thursday",
      time: "5:00-6:30pm",
      ageGroups: ["U9s", "U12s", "U13s"],
      location: {
        name: "Norbury Park",
        address: "Cricket Green",
        postcode: "SW16 3LV",
        mapUrl: "https://maps.google.com/?q=Norbury+Park+Cricket+Green+SW16+3LV"
      }
    },
    {
      day: "Saturday",
      time: "10:00-11:00am",
      ageGroups: ["U9s", "U10s", "U11s", "U12s", "U13s"],
      location: {
        name: "Tooting Bec",
        address: "Tooting Bec Lido",
        postcode: "SW16 1RU",
        mapUrl: "https://maps.google.com/?q=Tooting+Bec+Lido+SW16+1RU"
      }
    }
  ];

  const contact = {
    email: "info@stormelitefc.com",
    phone: "0790357276"
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative z-10 overflow-hidden pt-40 lg:pt-[280px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Join Storm Elite FC
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your potential at our open trials. Select a session below that matches your age group and preferred location.
          </p>
        </div>

        {/* Contact Banner */}
        <div className="bg-primary/10 rounded-xl p-6 mb-8 flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Trial Sessions */}
        <div className="grid gap-6">
          {trialSessions.map((session, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div 
                className="cursor-pointer p-6"
                onClick={() => setExpandedLocation(expandedLocation === index ? null : index)}
              >
                <div className="flex flex-wrap gap-6 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{session.day}s</h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">{session.time}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {session.ageGroups.map((age, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {age}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedLocation === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Location Details */}
                <div 
                  className={`mt-4 transition-all duration-300 ${
                    expandedLocation === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{session.location.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{session.location.address}</p>
                        <p className="text-gray-600 dark:text-gray-300">{session.location.postcode}</p>
                        <a 
                          href={session.location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-primary hover:underline"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to show your skills? Contact us to confirm your attendance or ask any questions.
          </p>
          <div className="inline-flex gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Email Us
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialsSection;