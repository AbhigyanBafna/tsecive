import { useMemo } from "react";

const Property1Variant2 = ({
  property1Variant2Display,
  property1Variant2FlexDirection,
  property1Variant2AlignItems,
  property1Variant2JustifyContent,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      display: property1Variant2Display,
      flexDirection: property1Variant2FlexDirection,
      alignItems: property1Variant2AlignItems,
      justifyContent: property1Variant2JustifyContent,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Display,
    property1Variant2FlexDirection,
    property1Variant2AlignItems,
    property1Variant2JustifyContent,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  return (
    <div
      className="flex flex-row items-start justify-start text-center text-xs text-gray-100 font-poppins"
      style={property1Variant2Style}
    >
      <div className="rounded-2xs bg-white w-[90px] h-[45px] flex flex-row items-center justify-center py-0 px-2 box-border">
        <div className="relative uppercase font-medium">POST</div>
      </div>
      <style>
        {`
          /* Add styles for the button here */
          .rounded-2xs {
            border: 3px solid #009076; /* Thick border */
            transition: background-color 0.3s, color 0.3s; /* Smooth transition */
          }
          .rounded-2xs:hover {
            background-color: #009076 !important; /* Background color on hover */
            color: #f6f6f6; /* Text color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default Property1Variant2;


