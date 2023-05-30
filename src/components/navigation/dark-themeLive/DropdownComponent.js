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

  useEffect(() => {
    const currentPath = router.asPath.toLowerCase();
    const activeTab = currentPath.split("/")[1];
    if (activeTab === parentText.toLowerCase()) {
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
            <DropdownButton
              title={label}
              className={"dropcustom"}
              show={dropMenu}
              onClick={() => setDropMenu(!dropMenu)}
            ></DropdownButton>
          </Dropdown>

          {dropMenu && (
            <Dropdown.Menu show={dropMenu} className="nestedDropdownMenu">
              {Object.keys(menuItems).map((key) => (
                <Link
                  key={key}
                  href={`/${[parentText, ...parentMenuNames]
                    .join("/")
                    .toLowerCase()}/${key.toLowerCase()}`}
                  passHref
                >
                  <div
                    key={key}
                    className={`subMenu ${
                      router.asPath
                        .toLowerCase()
                        .includes(`/${key.toLowerCase()}`)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menuItems[key]}
                  </div>
                </Link>
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
