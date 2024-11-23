import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CoachesSection from "@/components/Coaches/coaches";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Storm Elite Football Club",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="At Storm Elite Football Club, we are more than just a team; we are a community dedicated to nurturing talent, building character, and fostering a passion for football. Our mission is to empower young athletes to excel on and off the pitch through exceptional coaching, teamwork, and a commitment to excellence. Join us as we inspire the next generation of football stars."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <CoachesSection />
    </>
  );
};

export default AboutPage;
