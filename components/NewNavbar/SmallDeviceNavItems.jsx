import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

import Arrow from "./Icons/Arrow";
const SmallDeviceNavItems = ({ details, itemNo, setActiveNav, activeNav }) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  const [isHoverOnChild, setIsHoverOnChild] = useState(false);
  const [activePath, setActivePath] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [childWidth, setChildWidth] = useState(350);
  const ref = useRef(null);
  const { name, child, link, title, id } = details;
  const router = useRouter();

  const toggleDropdownVisibility = () => {
    if (child?.length > 0) {
      setIsChildVisible(!isChildVisible);
    }
  };

  const handleNavigate = (link) => {
    router.push(link);
  };

  useEffect(() => {
    if (title === "service") {
      setChildWidth(350);
    } else if (title === "portfolio") {
      setChildWidth(250);
    } else if (title === "industries") {
      setChildWidth(300);
    }
  }, [title]);

  useEffect(() => {
    const handleZoomChange = () => {
      const zoomLevel = window.devicePixelRatio;
      if (zoomLevel >= 1.5) {
        setFontSize(14);
      } else if (zoomLevel >= 1.25) {
        setFontSize(14);
      } else {
        setFontSize(16);
      }
    };
    handleZoomChange();
    window.addEventListener("resize", handleZoomChange);
    return () => {
      window.removeEventListener("resize", handleZoomChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsChildVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isChildLinkActive = child.some((childItem) =>
    router.asPath.includes(childItem.link)
  );
  return (
    <div className="w-full" ref={ref}>
      <div
        onClick={() =>
          link === "/industries" || link === "/about" || link === "/careers"
            ? handleNavigate(link)
            : toggleDropdownVisibility()
        }
        className={`text-base font-medium transition-one flex flex-col justify-between duration-200 `}
      >
        <div className="flex items-center justify-between gap-4">
          <p
            className={`${
              isHoverOnChild ||
              isChildVisible ||
              router.asPath.includes(link) ||
              isChildLinkActive
                ? "border-b-2 border-b-primary"
                : ""
            } ${
              activeNav === id ? "border-b-2 border-b-primary" : ""
            } font-semibold `}
          >
            {name}
          </p>
          {child?.length > 0 && (
            <Arrow
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdownVisibility();
              }}
              className={`${isChildVisible ? "rotate-180 duration-200" : ""}`}
            />
          )}
        </div>

        <div>
          {isChildVisible && (
            <div>
              {child?.length > 0 && (
                <div
                  onMouseEnter={() => setIsHoverOnChild(true)}
                  onMouseLeave={() => setIsHoverOnChild(false)}
                  className={`childDiv  text-[#1B1919] bg-white space-y-4 pt-4 rounded-md`}
                >
                  {child?.map((item, index) => (
                    <div
                      onClick={() => router.push(item.link)}
                      key={index}
                      className={` hover:underline cursor-pointer text-pretty  flex items-center gap-3 `}
                    >
                      <div className="bg-black p-1 rounded-full flex justify-center items-center w-[22px] h-[22px]">
                        {item?.icon}
                      </div>
                      <p
                        className={`text-[13px]  ${
                          router.asPath.includes(item.link)
                            ? "border-b-2 border-b-primary"
                            : ""
                        }`}
                      >
                        {item?.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceNavItems;
