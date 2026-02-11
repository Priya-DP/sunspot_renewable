type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};

export const menuData: MenuItemDataType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/service",
    submenu: [
      // { title: "Services", link: "/service" },
      { title: "Services", link: "/service" },
      { title: "Service Details", link: "/service-details" },
    ],
  },
  {
    title: "Projects",
    link: "/project",
    submenu: [
      { title: "Project", link: "/project" },
      { title: "Project Details", link: "/project-details" },
    ],
  },

  {
    title: "Team",
    link: "/team",
    submenu: [
      { title: "Our Team", link: "/team" },
      { title: "Team Details", link: "/team-details" },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
