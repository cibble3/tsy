import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import NestedDropdownComponent from "./NestedDropdownComponent";

const DropdownComponent = ({ parentText, menuItems }) => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      <div
        className="menuWrapper"
        style={{ borderTop: "1px solid #494949", position: "relative" }}
      >
        <div>
          <Dropdown>
            <DropdownButton
              title={parentText}
              className={"dropcustom"}
              show={dropMenu}
              onClick={() => setDropMenu(!dropMenu)}
            ></DropdownButton>
          </Dropdown>

          <Dropdown.Menu show={dropMenu}>
            {Object.keys(menuItems).map((key) => (
              <Dropdown.Item key={key}>
                {typeof menuItems[key] === "object" ? (
                  <div className="submenu-container">
                    <NestedDropdownComponent
                      parentText={key}
                      menuItems={menuItems[key]}
                      key={key}
                    />
                  </div>
                ) : (
                  <div className="subMenu">{menuItems[key]}</div>
                )}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>
        <div className="dropArrow">
          <RxCaretDown
            onClick={() => setDropMenu(!dropMenu)}
            size={25}
            color="white"
            className={`dropdownArrow ${dropMenu ? "dropdown-open" : ""}`}
          />
          {/* {!dropMenu &&<RxCaretDown onClick={() => setDropMenu(!dropMenu)} size={25} color="white" className="dropdownArrow" />} */}
        </div>
      </div>
    </>
  );
};

export default DropdownComponent;
