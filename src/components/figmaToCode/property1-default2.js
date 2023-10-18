import { useMemo } from "react";
import Property1Default3 from "./property1-default3";

const Property1Default2 = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
  ]);

  return (
    <div className="w-[1149px] h-[77px]" style={property1Default2Style}>
      <Property1Default3
        courseTitle="Internet Programming 2019 - 20"
        property1DefaultWidth="100%"
        property1DefaultHeight="100%"
        property1DefaultPosition="absolute"
        property1DefaultTop="0%"
        property1DefaultRight="0%"
        property1DefaultBottom="0%"
        property1DefaultLeft="0%"
      />
    </div>
  );
};

export default Property1Default2;
