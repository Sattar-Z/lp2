import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions about our teams, trials, or upcoming events? We’re here to help. Whether you're a parent, player, or fan, feel free to reach out to us with your enquiries, and we’ll respond promptly. Let’s connect and build the future of football together."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
