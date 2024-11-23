import { Feature } from "@/types/feature";
import { Diversity1, Groups, Lightbulb }from '@mui/icons-material';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: Groups,
    title: "Team Collaboration",
    paragraph:
      "We foster an environment of collaboration and innovation, ensuring every team member contributes to building exceptional solutions.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Innovative Solutions",
    paragraph:
      "We design and implement forward-thinking strategies to solve complex challenges, keeping our clients ahead of the curve.",
  },
  {
    id: 3,
    icon: Diversity1,
    title: "Client-Centric Approach",
    paragraph:
      "Our team puts client needs first, ensuring customised experiences that deliver exceptional results.",
  },
];

export default featuresData;
