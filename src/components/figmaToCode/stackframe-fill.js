import { useMemo } from "react";

const StackframeFill = ({
  stackframeFillStackframeF,
  stackframeFillIconWidth,
  stackframeFillIconHeight,
  stackframeFillIconPosition,
  stackframeFillIconTop,
  stackframeFillIconRight,
  stackframeFillIconBottom,
  stackframeFillIconLeft,
  stackframeFillIconMaxWidth,
  stackframeFillIconOverflow,
  stackframeFillIconMaxHeight,
}) => {
  const stackframeFillIconStyle = useMemo(() => {
    return {
      width: stackframeFillIconWidth,
      height: stackframeFillIconHeight,
      position: stackframeFillIconPosition,
      top: stackframeFillIconTop,
      right: stackframeFillIconRight,
      bottom: stackframeFillIconBottom,
      left: stackframeFillIconLeft,
      maxWidth: stackframeFillIconMaxWidth,
      overflow: stackframeFillIconOverflow,
      maxHeight: stackframeFillIconMaxHeight,
    };
  }, [
    stackframeFillIconWidth,
    stackframeFillIconHeight,
    stackframeFillIconPosition,
    stackframeFillIconTop,
    stackframeFillIconRight,
    stackframeFillIconBottom,
    stackframeFillIconLeft,
    stackframeFillIconMaxWidth,
    stackframeFillIconOverflow,
    stackframeFillIconMaxHeight,
  ]);

  return (
    <img
      className="w-24 h-[81px]"
      alt=""
      src={stackframeFillStackframeF}
      style={stackframeFillIconStyle}
    />
  );
};

export default StackframeFill;
