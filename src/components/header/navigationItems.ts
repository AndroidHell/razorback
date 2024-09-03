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
    title: "Menu",
    path: "/menu/LunchMenu",
    icon: "projects",
    // children: [
    //   { title: "Lunch", path: "/menu#lunch" },
    //   { title: "Dinner", path: "/menu#dinner" },
    //   { title: "Cocktails", path: "/menu#cocktails" },
    //   { title: "Brunch", path: "/menu#brunch" },
    // ],
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
];
