import { useMemo, useState } from "react";

const Property1Default3 = ({
  courseTitle,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const property1Default3Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
      border: `2px solid #6FE4CF`, // Thick border even without hover
      borderRadius: "10px", // Slightly rounded corners
      transition: "background-color 0.3s, color 0.3s",
      backgroundColor: isHovered ? "#6FE4CF" : "transparent",
      color: isHovered ? "#f6f6f6" : "darkslategray",
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
    isHovered,
  ]);

  return (
    <div
      className="w-[1149px] h-[77px] text-left text-5xl text-darkslategray font-poppins"
      style={property1Default3Style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini" />
      <div className="absolute h-[45.45%] w-[37.68%] top-[27.27%] left-[4.44%] leading-[119.5%] capitalize inline-block">
        {courseTitle}
      </div>
    </div>
  );
};

export default Property1Default3;

