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

  // we got options!
  {
    title: "Menu Single",
    path: "/menu",
    icon: "projects",
  },
  {
    title: "Menu Tabbed",
    path: "/menu/LunchMenu",
    icon: "projects",
  },
  {
    title: "Menu Sub",
    path: "/menu/LunchMenu",
    icon: "projects",
    children: [
      { title: "Lunch", path: "/menu/LunchMenu" },
      { title: "Dinner", path: "/menu/DinnerMenu" },
      { title: "Cocktails", path: "/menu/CocktailMenu" },
      { title: "Brunch", path: "/menu/BrunchMenu" },
    ],
  },
  {
    title: "About Us",
    path: "/about",
    icon: "about",
  },
  // {
  //   title: "Reviews",
  //   path: "/reviews",
  //   icon: "reviews",
  // },
  // {
  //   title: "Blog",
  //   path: "/blog",
  //   icon: "blog",
  // },
];
