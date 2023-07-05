import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const TopText = ({ html }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    isMobile && setIsExpanded(!isExpanded);
  };

  const h1Regex = /<h1>(.*?)<\/h1>/g;
  const h2Regex = /<h2>(.*?)<\/h2>/g;

  const extractH1Text = () => {
    const match = h1Regex.exec(html);
    return match ? match[1] : "";
  };

  const extractH2Text = () => {
    const match = h2Regex.exec(html);
    return match ? match[1] : "";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="siteContent">
      <h1 onClick={handleToggle}>
        {extractH1Text()}
        {isMobile && (
          <>
            {" "}
            {html?.includes("<h2>") &&
              (isExpanded ? (
                <AiFillCaretUp size={30} onClick={handleToggle} />
              ) : (
                <AiFillCaretDown size={30} onClick={handleToggle} />
              ))}
          </>
        )}
      </h1>
      {isMobile ? (
        <>
          {isExpanded && (
            <h2 style={{ display: "block" }}>{extractH2Text()}</h2>
          )}
          {!isExpanded && (
            <h2 style={{ display: "none" }}>{extractH2Text()}</h2>
          )}
        </>
      ) : (
        <h2>{extractH2Text()}</h2>
      )}
    </div>
  );
};

export default TopText;
