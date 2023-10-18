import { useMemo } from "react";

const Property1DefaultProperty2 = ({
  property1DefaultProperty2Display,
  property1DefaultProperty2FlexDirection,
  property1DefaultProperty2AlignItems,
  property1DefaultProperty2JustifyContent,
  property1DefaultProperty2Position,
  property1DefaultProperty2Top,
  property1DefaultProperty2Left,
  property1DefaultProperty2Cursor,
  onButton3Click,
}) => {
  const property1DefaultProperty2Style = useMemo(() => {
    return {
      display: property1DefaultProperty2Display,
      flexDirection: property1DefaultProperty2FlexDirection,
      alignItems: property1DefaultProperty2AlignItems,
      justifyContent: property1DefaultProperty2JustifyContent,
      position: property1DefaultProperty2Position,
      top: property1DefaultProperty2Top,
      left: property1DefaultProperty2Left,
      cursor: property1DefaultProperty2Cursor,
    };
  }, [
    property1DefaultProperty2Display,
    property1DefaultProperty2FlexDirection,
    property1DefaultProperty2AlignItems,
    property1DefaultProperty2JustifyContent,
    property1DefaultProperty2Position,
    property1DefaultProperty2Top,
    property1DefaultProperty2Left,
    property1DefaultProperty2Cursor,
  ]);

  return (
    <div
      className="flex flex-row items-start justify-start text-center text-5xl text-gray-100 font-poppins"
      style={property1DefaultProperty2Style}
      onClick={onButton3Click}
    >
      <div className="rounded-2xs bg-whitesmoke w-[247px] h-[74px] flex flex-row items-center justify-center py-0 px-2 box-border">
        <div className="relative uppercase font-medium">
          <span>{`Get `}</span>
          <span className="text-[22px]">started</span>
        </div>
      </div>
      <style>
        {`
          /* Add styles for the button here */
          .rounded-2xs {
            border: 3px solid #009076; /* Thick border */
            transition: background-color 0.3s, color 0.3s; /* Smooth transition */
          }
          .rounded-2xs:hover {
            background-color: #009076; /* Background color on hover */
            color: #f6f6f6; /* Text color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default Property1DefaultProperty2;

