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
        pathname: "/products/show",
        title: "Products",
        subMenu : [{
          icon : "PlusSquare",
          pathname: "/products/add",
          title : " Add Products"
        },
        {
          icon : "List",
          pathname: "/products/show",
          title : " All Products"
        }]
      },
      {
        icon: "Copy",
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
