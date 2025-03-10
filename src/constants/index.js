import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing Enthusiast",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "B.Tech in Computer Science (Cloud Computing & Virtual Tech)",
    company_name: "UPES, Dehradun",
    icon: backend,
    iconBg: "#383E56",
    date: "July 2022 - May 2026",
    points: [
      "Studying Cloud Computing, Software Development, and Virtualization.",
      "Developed multiple projects utilizing real-time data and scalable architectures.",
    ],
  },
  {
    title: "Social Intern",
    company_name: "Indian Development Foundation (NGO)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Conducted educational classes for underprivileged children.",
      "Led a team as Group Lead to ensure impactful learning experiences.",
    ],
  },
];

const projects = [
  {
    name: "Personalized News Aggregator",
    description:
      "A real-time news aggregation platform fetching categorized articles based on user preferences using RESTful APIs.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: web, // Replace with actual project image if available
    source_code_link: "https://github.com/manya/news-aggregator",
  },
  {
    name: "E-Grocery – Price Comparison App",
    description:
      "Full-stack grocery price tracker for Blinkit, Zepto, and BigBasket with automated real-time data collection.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
    ],
    image: backend, // Replace with actual project image if available
    source_code_link: "https://github.com/manya/grocery-comparison",
  },
  {
    name: "3D Web Developer Portfolio",
    description:
      "A 3D portfolio built using React Three Fiber, Three.js, and Tailwind CSS, featuring interactive animations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: threejs, // Replace with actual project image if available
    source_code_link: "https://github.com/manya/3D-portfolio",
  },
];

export { services, technologies, experiences, projects };
