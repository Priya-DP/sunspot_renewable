export interface TeamMemberDataType {
  id: number;
  role: string;
  name: string;
  description: string;
  image: string;
  socialLinks: {
    icon: string;
    link: string;
  }[];
  delay: string;
}

export const teamMembersOneData: TeamMemberDataType[] = [
  {
    id: 1,
    role: "General Manager",
    name: "MR.GANESHKUMSR",
    description:
      "MR.GANESHKUMSR has over 10 years of experience in the solar industry and is a visionary leader known for strategic thinking, strong analytical skills, and excellent problem-solving abilities.",
    image: "/img/team/hover-1.png",
    socialLinks: [
      {
        icon: "fab fa-facebook-f",
        link: "",
      },
      {
        icon: "fab fa-instagram",
        link: "",
      },
      {
        icon: "fab fa-linkedin-in",
        link: "",
      },
    ],
    delay: ".3",
  },
  {
    id: 2,
    role: "Project Manager",
    name: "MR.PRATHAP",
    description:
      "MR.PRATHAP is an electrical engineer with 5+ years of experience in solar projects and solar panel installation",
    image: "/img/team/hover-1.png",
    socialLinks: [
      {
        icon: "fab fa-facebook-f",
        link: "",
      },
      {
        icon: "fab fa-instagram",
        link: "",
      },
      {
        icon: "fab fa-linkedin-in",
        link: "",
      },
    ],
    delay: ".5",
  },
  {
    id: 3,
    role: "Purchase Manager",
    name: "MR.CHANDRAN",
    description:
      "MR.CHANDRAN holds a B.Com degree and has 10+ years of experience in procurement, inventory management, vendor relations, and SAP PP.",
    image: "/img/team/hover-1.png",
    socialLinks: [
      {
        icon: "fab fa-facebook-f",
        link: "",
      },
      {
        icon: "fab fa-instagram",
        link: "",
      },
      {
        icon: "fab fa-linkedin-in",
        link: "",
      },
    ],
    delay: ".7",
  },
  {
    id: 4,
    role: "Finance Head",
    name: "MR.MATHIVANAN",
    description:
      "Mr. Mathivanan manages accounting, auditing, taxation, budgeting, and financial compliance at Sunspot Solar.",
    image: "/img/team/hover-1.png",
    socialLinks: [
      {
        icon: "fab fa-facebook-f",
        link: "",
      },
      {
        icon: "fab fa-instagram",
        link: "",
      },
      {
        icon: "fab fa-linkedin-in",
        link: "",
      },
    ],
    delay: ".9",
  },
   {
    id: 5,
    role: "Sales Head",
    name: "MR.JAWAHAR",
    description:
      "Mr. Jawahar holds a B.Com degree and has 13+ years of experience in sales, leading business development and sales strategy at Sunspot Solar.",
    image: "/img/team/hover-1.png",
    socialLinks: [
      {
        icon: "fab fa-facebook-f",
        link: "",
      },
      {
        icon: "fab fa-instagram",
        link: "",
      },
      {
        icon: "fab fa-linkedin-in",
        link: "",
      },
    ],
    delay: ".11",
  },
];
