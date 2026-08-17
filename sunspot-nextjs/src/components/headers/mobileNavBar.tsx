'use client';

import { menuData, MenuItemDataType } from "@/db/menuData";
import { useState } from "react";
import Link from "next/link";

const MobileMenuList = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="mobile-menu mean-container d-lg-none">
      <div className="mean-bar">
        <nav className="mean-nav">
          <ul>
            {menuData.map(({ link, title, submenu }, index) => (
              <li key={index} className={submenu ? "dropdown" : ""}>
                <Link href={link}>{title}</Link>
                {submenu && (
                  <>
                    <span
                      className={`mean-expand ${activeMenu === index ? "mean-clicked" : ""}`}
                      onClick={() => toggleSubMenu(index)}
                    >
                      {activeMenu === index ? "-" : "+"}
                    </span>
                    <ul
                      className="submenu"
                      style={{ display: activeMenu === index ? "block" : "none" }}
                    >
                      {submenu.map((sub, i) => (
                        <li key={i}>
                          <Link href={sub.link}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuList;
