import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

// NAV LINKS SECTION
export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#testimonials", label: "Testimonials" },
];

// IMAGES SECTION
export { slack, amazon, woocommerce, meundies, sitepoint };

//   purpose section
export const purposes = [
  {
    icon: "🟣", // Replace with your actual icon component or image
    title: "Built for impact",
    description:
      "We identify and nurture a truly diverse team of designers, developers and marketers",
  },
  {
    icon: "🔴", // Replace with your actual icon component or image
    title: "In sync with you",
    description:
      "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
  },
];

//   features section

export const featuress = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

//   services section
export const services = [
  {
    icon: BsStack,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
    className: "text-indigo-600",
  },
  {
    icon: HiLightBulb,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
    className: "text-amber-400",
  },
  {
    icon: FiSettings,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
    className: "text-red-400",
  },
  {
    icon: BiTime,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
    className: "text-cyan-400",
  },
];
