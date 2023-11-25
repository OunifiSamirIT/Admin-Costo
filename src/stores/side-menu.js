import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Dashboard",
      },
      {
        icon: "Box",
        pathname: "/products",
        title: "Products",
      },
      {
        icon: "List",
        pathname: "/categories",
        title: "Categories",
      },
      {
        icon: "ShoppingBag",
        pathname: "/transactions",
        title: "Transactions",
      },
      {
        icon: "Settings",
        pathname: "/settings",
        title: "Settings",
      },

    ],
  },
});

export { sideMenu };
