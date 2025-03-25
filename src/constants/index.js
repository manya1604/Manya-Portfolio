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
  hello,
  ai,
  aws,
  postgres,
  env,
  network,
  volume,
  sql,
  titanic,
  backery,
  mini
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

export const projects = [
  {
    name: "Bakery Foundation Example",
    description: "A Dockerized environment for a bakery foundation application.",
    tags: [
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Containers", color: "green-text-gradient" }
    ],
    image:backery,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Bakery_Foundation_Example"
  },
  {
    name: "Containerized MySQL: Scalable & Secure",
    description: "A project demonstrating secure and scalable MySQL containers.",
    tags: [
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: sql,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Containerized%20MySQL:%20Scalable%20&%20Secure"
  },
  {
    name: "Deploying a Streamlit App in Docker on AWS",
    description: "Deploying a Streamlit app inside a Docker container and hosting it on AWS.",
    tags: [
      { name: "Streamlit", color: "red-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "AWS", color: "yellow-text-gradient" }
    ],
    image: aws,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Deploying%20a%20Streamlit%20App%20in%20Docker%20on%20AWS"
  },
  {
    name: "Docker Bridge: Balancing Isolation & Connectivity",
    description: "Exploring Docker bridge networking for optimized connectivity.",
    tags: [
      { name: "Networking", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: network,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Docker%20Bridge:%20Balancing%20Isolation%20&%20Connectivity"
  },
  {
    name: "Docker Volumes & Bind Mounts: Ensuring Data Persistence",
    description: "Demonstrates volume management for persistent data storage in Docker.",
    tags: [
      { name: "Storage", color: "purple-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: volume,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Docker%20Volumes%20&%20Bind%20Mounts:%20Ensuring%20Data%20Persistence"
  },
  {
    name: "Docker Basics - Hello World",
    description: "A simple beginner-friendly project introducing Docker basics.",
    tags: [
      { name: "Beginner", color: "yellow-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: hello,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Docker_Basics_HelloWorld"
  },
  {
    name: "Dockerized Streamlit Development Environment",
    description: "Creating a fully Dockerized development setup for Streamlit applications.",
    tags: [
      { name: "Streamlit", color: "red-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: env,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Dockerized%20Streamlit%20Development%20Environment"
  },
  {
    name: "EvidentlyAI",
    description: "Implementing AI monitoring with Evidently inside a Dockerized environment.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: ai,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/EvidentlyAI"
  },
  {
    name: "Minikube with Docker on Windows",
    description: "Setting up Minikube for Kubernetes deployments using Docker on Windows.",
    tags: [
      { name: "Kubernetes", color: "purple-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: mini,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Minikube%20with%20Docker%20on%20Windows"
  },
  {
    name: "Streamlit & PostgreSQL, Containerized",
    description: "Building a containerized Streamlit app integrated with PostgreSQL.",
    tags: [
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Streamlit", color: "red-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: postgres,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Streamlit%20&%20PostgreSQL,%20Containerized"
  },
  {
    name: "Titanic Survival Predictor - Containerized Streamlit App",
    description: "A machine learning model predicting Titanic survival chances, running in a Docker container.",
    tags: [
      { name: "Machine Learning", color: "yellow-text-gradient" },
      { name: "Streamlit", color: "red-text-gradient" },
      { name: "Docker", color: "green-text-gradient" }
    ],
    image: titanic,
    source_code_link: "https://github.com/manya1604/Docker-Container-Projects/tree/main/Titanic%20Survival%20Predictor%20Containerized%20Streamlit%20App"
  }
];
export { services, technologies, experiences};