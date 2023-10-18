import { useMemo } from "react";

const Desktop = ({
  desktopDesktop,
  desktopIconWidth,
  desktopIconHeight,
  desktopIconPosition,
  desktopIconTop,
  desktopIconRight,
  desktopIconBottom,
  desktopIconLeft,
  desktopIconMaxWidth,
  desktopIconMaxHeight,
}) => {
  const desktopIconStyle = useMemo(() => {
    return {
      width: desktopIconWidth,
      height: desktopIconHeight,
      position: desktopIconPosition,
      top: desktopIconTop,
      right: desktopIconRight,
      bottom: desktopIconBottom,
      left: desktopIconLeft,
      maxWidth: desktopIconMaxWidth,
      maxHeight: desktopIconMaxHeight,
    };
  }, [
    desktopIconWidth,
    desktopIconHeight,
    desktopIconPosition,
    desktopIconTop,
    desktopIconRight,
    desktopIconBottom,
    desktopIconLeft,
    desktopIconMaxWidth,
    desktopIconMaxHeight,
  ]);

  return (
    <img
      className="w-[67px] h-[67px] overflow-hidden"
      alt=""
      src={desktopDesktop}
      style={desktopIconStyle}
    />
  );
};

export default Desktop;
