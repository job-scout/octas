import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";


const NavItems = ({ details, itemNo, setActiveNav, activeNav }) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  const [isHoverOnChild, setIsHoverOnChild] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState(-145);
  const [fontSize, setFontSize] = useState(16);
  const [childWidth, setChildWidth] = useState(350);
  const ref = useRef(null);
  const { name, child, link, title, id } = details;
  const router = useRouter();
  const childDropdownRef = useRef(null);

  const handleNavigate = () => {
    if (child?.length > 0 && !link) {
      setIsChildVisible(false);
    } else {
      router.push(link);
      setIsChildVisible(false);
    }
  };

  useEffect(() => {
    if (title === "service") {
      setChildWidth(350);
      setDropDownPosition(-145);
    } else if (title === "portfolio") {
      setChildWidth(300);
      setDropDownPosition(-20);
    } else if (title === "industries") {
      setChildWidth(300);
      setDropDownPosition(-30);
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
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        childDropdownRef.current &&
        !childDropdownRef.current.contains(event.target)
      ) {
        setIsChildVisible(false);
        setIsHoverOnChild(false);
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
    <div
      className="relative "
      ref={ref}
      onMouseEnter={() => {
        if (isChildVisible) {
          setIsChildVisible(false);
        }
        child.length > 0 && setIsChildVisible(true);
      }}
      onMouseLeave={() => {
        if (isChildVisible && !isHoverOnChild) {
          setIsChildVisible(false);
        } else {
          if (!isHoverOnChild) {
            child.length > 0 && setIsChildVisible(false);
            setIsHoverOnChild(false);
          }
        }
      }}
    >
      <div
        onClick={() => handleNavigate(null)}
        className={`
            text-[16px] ${
          isHoverOnChild ||
          isChildVisible ||
          router.asPath.includes(link) ||
          isChildLinkActive
            ? "border-b-2 border-b-primary"
            : ""
        }  cursor-pointer hover:border-b-2 hover:border-b-primary transition-one `}
      >
        {name}
      </div>

      {isChildVisible && (
        <>
          {child?.length > 0 && (
            <div className="absolute top-4 left-[-125px] pt-6">
              <div
                ref={childDropdownRef}
                onMouseEnter={() => setIsHoverOnChild(true)}
                onMouseLeave={() => {
                  setIsHoverOnChild(false);
                  setIsChildVisible(false);
                }}
                className={`childDiv text-[14px] text-[#1B1919] bg-white p-5 space-y-4  z-10 w-[350px]  rounded-md shadow-lg`}
              >
                {child?.map((item, index) => (
                  <div
                    onClick={() => router.push(item.link)}
                    key={index}
                    className={` hover:underline cursor-pointer ${
                      router.asPath.includes(item.link) ? "text-primary" : ""
                    } flex items-center gap-4 `}
                  >
                    <div className="bg-black p-1.5 rounded-full flex justify-center items-center w-[30px] h-[30px]">
                      {item?.icon}
                    </div>
                    <p
                      className={`text-md ${
                        router.asPath.includes(item.link) ? "underline" : ""
                      }`}
                    >
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavItems;
