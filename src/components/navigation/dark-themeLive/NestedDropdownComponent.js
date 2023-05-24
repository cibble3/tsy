import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const NestedDropdownComponent = ({ parentText, menuItems }) => {
  const [dropNestedMenu, setNestedDropMenu] = useState(false);

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
              show={dropNestedMenu}
              onClick={() => setNestedDropMenu(!dropNestedMenu)}
            ></DropdownButton>
          </Dropdown>

          <Dropdown.Menu show={dropNestedMenu}>
            {Object.keys(menuItems).map((key) => (
              <Dropdown.Item
                key={key}
                onClick={() => setNestedDropMenu(!dropNestedMenu)}
              >
                {typeof menuItems[key] === "object" ? (
                  <NestedDropdownComponent
                    parentText={key}
                    menuItems={menuItems[key]}
                    key={key}
                  />
                ) : (
                  <div className="subMenu">{menuItems[key]}</div>
                )}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>
        <div className="dropArrow">
        <RxCaretDown onClick={() => setNestedDropMenu(!dropNestedMenu)} size={25} color="white" className={`dropdownArrow ${dropNestedMenu ? 'dropdown-open': '' }`} />
          {/* {!dropNestedMenu &&<RxCaretDown onClick={() => setNestedDropMenu(!dropNestedMenu)} size={25} color="white" className="dropdownArrow" />} */}
        </div>
      </div>
    </>
  );
};

export default NestedDropdownComponent;
