import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  // Apps
  const [isEcommerce, setIsEcommerce] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
  }, [history, iscurrentState, isDashboard, isApps]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "ecommerce",
          label: "Ecommerce",
          link: "/dashboard",
          parentId: "dashboard",
        },
      ],
    },
    {
      id: "apps",
      label: "Apps",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: "appsecommerce",
          label: "Ecommerce",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsEcommerce(!isEcommerce);
          },
          parentId: "apps",
          stateVariables: isEcommerce,
          childItems: [
            {
              id: 1,
              label: "Products",
              link: "/apps-ecommerce-products",
              parentId: "apps",
            },
            {
              id: 2,
              label: "Product Details",
              link: "/apps-ecommerce-product-details",
              parentId: "apps",
            },
            {
              id: 3,
              label: "Create Product",
              link: "/apps-ecommerce-add-product",
              parentId: "apps",
            },
            {
              id: 4,
              label: "Orders",
              link: "/apps-ecommerce-orders",
              parentId: "apps",
            },
            {
              id: 5,
              label: "Order Details",
              link: "/apps-ecommerce-order-details",
              parentId: "apps",
            },
            {
              id: 6,
              label: "Customers",
              link: "/apps-ecommerce-customers",
              parentId: "apps",
            },
            {
              id: 7,
              label: "Shopping Cart",
              link: "/apps-ecommerce-cart",
              parentId: "apps",
            },
            {
              id: 8,
              label: "Checkout",
              link: "/apps-ecommerce-checkout",
              parentId: "apps",
            },
            {
              id: 9,
              label: "Sellers",
              link: "/apps-ecommerce-sellers",
              parentId: "apps",
            },
            {
              id: 10,
              label: "Seller Details",
              link: "/apps-ecommerce-seller-details",
              parentId: "apps",
            },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
