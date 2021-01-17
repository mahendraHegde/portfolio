import { IoIosContact } from "react-icons/io";
import {
  SiMinutemailer,
  SiJavascript,
  SiKubernetes,
  SiGmail,
} from "react-icons/si";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitSquare,
  FaGitlab,
  FaDocker,
  FaSass,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Home from "../views/home";
import Contact from "../views/contact";

export const MENU_ITEMS = {
  aboutMe: {
    text: "About Me",
    key: "about",
    link: "/",
    icon: IoIosContact,
    component: Home,
  },
  contact: {
    text: "Contact",
    key: "contact",
    link: "/contact",
    icon: SiMinutemailer,
    component: Contact,
  },
};

export const SKILLS = [
  {
    icons: [
      {
        color: "#F1DE4F",
        icon: SiJavascript,
      },
    ],
    title: "Vanilla JavaScript",
    desc: "Having strong work experience on Vanilla Javascript including es6",
  },
  {
    icons: [{ color: "#54B689", icon: FaNodeJs }],
    title: "Node.js & Golang",
    desc:
      "Having strong work experience and knowledge of building server side solutions using Node.js Golang",
  },
  {
    icons: [{ icon: FaReact, color: "#62D4FA" }],
    title: "React",
    desc: "Have been building front-end solution using React.js",
  },
  {
    icons: [
      { icon: FaHtml5, color: "#DE6E3C" },
      { color: "#53A7DC", icon: FaCss3 },
      { color: "#BF6B97", icon: FaSass },
    ],
    title: "HTML5 & CCS3(Sass & Scss)",
    desc:
      "Extensively worked on HTML, css and other css preprocessors to build user friendly websites",
  },
  {
    icons: [{ icon: FaGitSquare, color: "#f1502f" }],
    title: "GIT",
    desc:
      "Every project uses GIT version control so that rollback and code management is gonna be easy",
  },
  {
    icons: [{ icon: FaDocker, color: "#0db7ed" }],
    title: "Docker",
    desc:
      "Source code will be containerised during both development and deployment so that platform descrepencies are not a problem for me.",
  },
  {
    icons: [{ icon: SiKubernetes, color: "#00f" }],
    title: "Kubernetes",
    desc: "I use Kubernetes to sail in the ocean of Microservices.",
  },
  {
    icons: [{ icon: FaGitlab, color: "#FC6D27" }],
    title: "Gitlab",
    desc:
      "I achieve continuous integration and continuous deployment with gitlab",
  },
];
const SOCIAL_ICON_SIZE = 20;
export const SOCIAL_MEDIA = {
  github: {
    link: "https://github.com/mahendraHegde",
    icon: {
      Icon: FaGithub,
      style: { color: "gray", fontSize: SOCIAL_ICON_SIZE },
    },
  },
  linkedIn: {
    link: "https://www.linkedin.com/in/mahendrahegde9/",
    icon: {
      Icon: FaLinkedin,
      style: { color: "#0e76a8", fontSize: SOCIAL_ICON_SIZE },
    },
  },
  gmail: {
    link: "mailto:hegdemahendra9@gmail.com",
    icon: {
      Icon: SiGmail,
      style: { color: "#D44638", fontSize: SOCIAL_ICON_SIZE },
    },
  },
  fb: {
    link: "https://www.facebook.com/hegdemahendra9/",
    icon: {
      Icon: FaFacebook,
      style: { color: "#3b5998", fontSize: SOCIAL_ICON_SIZE },
    },
  },
};
