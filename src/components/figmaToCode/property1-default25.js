import { useMemo, useState } from "react";
import Desktop from "./desktop";

const Property1Default25 = ({
  showMortarboardAltIcon,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  property1DefaultCursor,
  onGroupContainerClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const property1Default23Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
      cursor: property1DefaultCursor,
      backgroundColor: isHovered ? "#6FE4CF" : "white",
      color: isHovered ? "#f6f6f6" : "black",
      borderRadius: "20px",
      transition: "background-color 0.3s, color 0.3s",
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
    property1DefaultCursor,
    isHovered,
  ]);

  return (
    <div
      className="w-[302.11px] h-[335px] text-center text-5xl font-poppins"
      style={property1Default23Style}
      onClick={onGroupContainerClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl" style={{ backgroundColor: isHovered ? "#6FE4CF" : "white", opacity: 0.7 }} />
      <div className="absolute h-[38.81%] w-[43.03%] top-[20.6%] right-[28.5%] bottom-[40.6%] left-[28.47%] rounded-[50%]" style={{ backgroundColor: isHovered ? "#f6f6f6" : "lightcyan" }} />
      <div className="absolute h-[11.34%] w-[79.11%] top-[68.96%] left-[10.26%] leading-[119.5%] capitalize font-medium inline-block" style={{ color: isHovered ? "#f6f6f6" : "black" }}>{`Computer Science`}</div>
      {showMortarboardAltIcon && (
        <img
          className="absolute h-[0.9%] w-[1.66%] top-[63.88%] right-[80.14%] bottom-[35.22%] left-[18.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/mortarboard-alt.svg"
        />
      )}
      <Desktop
        desktopDesktop="/desktop1.svg"
        desktopIconWidth="22.18%"
        desktopIconHeight="20%"
        desktopIconPosition="absolute"
        desktopIconTop="29.85%"
        desktopIconRight="39.09%"
        desktopIconBottom="50.15%"
        desktopIconLeft="38.73%"
        desktopIconMaxWidth="100%"
        desktopIconMaxHeight="100%"
      />
    </div>
  );
};

export default Property1Default25;






