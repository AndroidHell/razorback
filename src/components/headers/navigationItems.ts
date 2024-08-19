interface NavItem {
  title: string;
  path: string;
  icon: string;
  children?: { title: string; path: string }[];
  target?: string; //add target: "_blank" to open in new tab
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "About Us",
    path: "/about",
    icon: "about",
  },
  {
    title: "Projects",
    path: "#",
    icon: "projects",
    children: [
      { title: "Project 1", path: "/projects" },
      { title: "Project 2", path: "/projects" },
    ],
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: "reviews",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "blog",
  },
  // {
  //   title: "Contact Us",
  //   path: "/contact",
  //   icon: "contactus",
  // },
];
