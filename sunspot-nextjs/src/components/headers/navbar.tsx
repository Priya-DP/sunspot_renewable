'use client';

import { menuData, MenuItemDataType } from "@/db/menuData";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  return (
    <ul>
      {menuData.map(({ link, title, megamenu, submenu }, index) => {
        const isActive = pathName === link || (link !== '/' && pathName?.startsWith(link));
        return (
          <li
            key={index}
            className={`${megamenu ? "menu-thumb" : ""} ${submenu ? "has-dropdown" : ""} ${isActive ? "active" : ""}`}
          >
            <Link href={link}>
              {title}{" "}
              {megamenu || submenu ? <i className="fas fa-angle-down" /> : ""}
            </Link>
            {megamenu && megamenu.length > 0 && (
              <ul className="submenu has-homemenu">
                <li className="homemenu-items">
                  {megamenu.map(({ image, links, title }, index) => (
                    <div key={index} className="homemenu">
                      <div className="homemenu-thumb">
                        <img src={image} alt="img" />
                        <div className="demo-button">
                          {links.map(({ link, title }, ind) => (
                            <Link key={ind} href={link} className="theme-btn">
                              <span>{title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">{title}</h4>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            )}
            {submenu && submenu.length > 0 && (
              <ul className="submenu">
                {submenu.map((dropdown, ind) => (
                  <Fragment key={ind}>
                    {dropdown.submenu ? (
                      <li className="has-dropdown">
                        <Link href="#">
                          {dropdown.title} <i className="fas fa-angle-down" />
                        </Link>
                        <ul className="submenu">
                          {dropdown.submenu.map((subDropdown, index) => (
                            <li key={index}>
                              <Link href={subDropdown.link}>
                                {subDropdown.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li>
                        <Link href={dropdown.link}>{dropdown.title}</Link>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
