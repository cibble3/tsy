import Link from "next/link";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { RxCaretDown } from "react-icons/rx";

const NestedDropdownComponent = ({
  parentText,
  menuItems,
  parentMenuNames = [],
}) => {
  const [dropNestedMenu, setNestedDropMenu] = useState(false);

  return (
    <>
      <div
        className="menuWrapper"
        style={{ borderTop: "1px solid #494949", position: "relative" }}
      >
        <div>
          <Link
            href={`/${parentMenuNames
              .join("/")
              .toLowerCase()}/${parentText.toLowerCase()}`}
          >
            <DropdownButton
              title={parentText}
              className={"dropcustom nestedDropdownButton"}
              show={dropNestedMenu}
              onClick={() => setNestedDropMenu(!dropNestedMenu)}
            />
          </Link>
          {dropNestedMenu && (
            <Dropdown.Menu show={dropNestedMenu} className="nestedDropdownMenu">
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
                  <Dropdown.Item
                    key={key}
                    href={`/${[...parentMenuNames, parentText]
                      .join("/")
                      .toLowerCase()}/${key.toLowerCase()}`} // Combine parent menu names in the URL
                  >
                    <div className="subMenu">{menuItems[key]}</div>
                  </Dropdown.Item>
                )
              )}
            </Dropdown.Menu>
          )}
        </div>
        <div className="dropArrow">
          <RxCaretDown
            onClick={() => setNestedDropMenu(!dropNestedMenu)}
            size={25}
            color="white"
            className={`dropdownArrow ${dropNestedMenu ? "dropdown-open" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default NestedDropdownComponent;