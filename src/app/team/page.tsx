import SingleBlog from "@/components/Blog/SingleBlog";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Teams from "@/components/Teams/teams";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Trials"
        description="Are you ready to take your skills to the next level? Storm Elite Football Club is searching for passionate, talented young players to join our ranks. Our trials are designed to assess your ability, determination, and team spirit, providing a platform to showcase your potential. Seize the opportunity to become part of a club that champions excellence and growth both on and off the pitch."
      /> */}
      <Teams />

    </>
  );
};

export default Blog;
