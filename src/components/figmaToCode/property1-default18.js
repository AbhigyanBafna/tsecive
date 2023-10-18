import { useMemo, useState } from "react";
import StackframeFill from "./stackframe-fill";

const Property1Default18 = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  property1DefaultCursor,
  onGroupContainer2Click,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const property1Default13Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
      cursor: property1DefaultCursor,
      backgroundColor: isHovered ? "#99ecdd" : "white",
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
      className="w-[495px] h-[108px] text-center text-5xl font-poppins rounded-xl transition duration-300"
      style={property1Default13Style}
      onClick={onGroupContainer2Click}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl transition duration-300" style={{ backgroundColor: isHovered ? "#99ecdd" : "white" }} />
      <div className="absolute h-[36.11%] w-[32.73%] top-[39.81%] left-[35.35%] leading-[119.5%] capitalize font-medium inline-block transition duration-100">
        Semester 5
      </div>
      <StackframeFill
        stackframeFillStackframeF="/stackframe-fill.svg"
        stackframeFillIconWidth="19.39%"
        stackframeFillIconHeight="75%"
        stackframeFillIconPosition="absolute"
        stackframeFillIconTop="12.04%"
        stackframeFillIconRight="76.57%"
        stackframeFillIconBottom="12.96%"
        stackframeFillIconLeft="4.04%"
        stackframeFillIconMaxWidth="100%"
        stackframeFillIconOverflow="hidden"
        stackframeFillIconMaxHeight="100%"
      />
    </div>
  );
};

export default Property1Default18;
