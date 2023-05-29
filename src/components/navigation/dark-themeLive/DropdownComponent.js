import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Nav } from "react-bootstrap";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";

const DropdownComponent = ({
  label,
  parentText,
  menuItems,
  parentMenuNames = [],
  menuData,
}) => {
  const [dropMenu, setDropMenu] = useState(false);
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = router.asPath.toLowerCase();
    const activeTab = currentPath.split("/")[1];
    if (activeTab === parentText.toLowerCase()) {
      setActiveItem(activeTab);
      setDropMenu(true);
    } else if (router.pathname == "/") {
      if (Object.keys(menuData).includes(parentText)) {
        setDropMenu(true);
      }
    }
  }, [router.asPath, parentText]);

  return (
    <>
      <div
        className="menuWrapper"
        style={{ borderTop: "1px solid #494949", position: "relative" }}
      >
        <div>
          <Dropdown>
            {/* <Link href={`/${parentText.toLowerCase()}`}> */}
            <DropdownButton
              title={label}
              className={"dropcustom"}
              show={dropMenu}
              onClick={() => setDropMenu(!dropMenu)}
            ></DropdownButton>
            {/* </Link> */}
          </Dropdown>

          {dropMenu && (
            <Dropdown.Menu show={dropMenu} className="nestedDropdownMenu">
              {Object.keys(menuItems).map((key) => (
                // typeof menuItems[key] === "object" ? (
                //   <div className="submenu-container" key={key}>
                //     <NestedDropdownComponent
                //       parentText={key}
                //       menuItems={menuItems[key]}
                //       parentMenuNames={[...parentMenuNames, parentText]}
                //     />
                //   </div>
                // ) :
                // <Dropdown.Item key={key}>
                <Link
                  href={`/${[parentText, ...parentMenuNames]
                    .join("/")
                    .toLowerCase()}/${key.toLowerCase()}`}
                >
                  <div className="subMenu">{menuItems[key]}</div>
                </Link>
                // </Dropdown.Item>
              ))}
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
