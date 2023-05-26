import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import NestedDropdownComponent from "./NestedDropdownComponent";

const DropdownComponent = ({ parentText, menuItems, parentMenuNames = [] }) => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      <div
        className="menuWrapper"
        style={{ borderTop: "1px solid #494949", position: "relative" }}
      >
        <div>
          <Dropdown>
            <Link href={`/${parentText.toLowerCase()}`}>
              <DropdownButton
                title={parentText}
                className={"dropcustom"}
                show={dropMenu}
                onClick={() => setDropMenu(!dropMenu)}
              ></DropdownButton>
            </Link>
          </Dropdown>

          {dropMenu && (
            <Dropdown.Menu show={dropMenu} className="nestedDropdownMenu">
              {Object.keys(menuItems).map((key) =>
                typeof menuItems[key] === "object" ? (
                  <div className="submenu-container" key={key}>
                    <NestedDropdownComponent
                      parentText={key}
                      menuItems={menuItems[key]}
                      parentMenuNames={[...parentMenuNames, parentText]}
                    />
                  </div>
                ) : (
                  <Dropdown.Item key={key}>
                    <Link
                      href={`/${[...parentMenuNames, parentText]
                        .join("/")
                        .toLowerCase()}/${key.toLowerCase()}`}
                    >
                      <div className="subMenu">{menuItems[key]}</div>
                    </Link>
                  </Dropdown.Item>
                )
              )}
            </Dropdown.Menu>
          )}
        </div>
        <div className="dropArrow">
          <RxCaretDown
            onClick={() => setDropMenu(!dropMenu)}
            size={25}
            color="white"
            className={`dropdownArrow ${dropMenu ? "dropdown-open" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default DropdownComponent;
