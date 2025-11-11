
import React from 'react';
export const ExpoSnackPreview = (
  {
    path,
    width = "100%",
    height = "500",
    hasBorder = true,
    platform = "web",
    theme = "light",
  }
) => {
  return (
    <iframe
      src={`https://snack.expo.dev/embedded/${path}?preview=true&amp;platform=${platform}&amp;theme=${theme}`}
      height={height}
      width={width}
      frameborder="0"
      data-snack-iframe="true"
      style={{
        display: "block",
        borderRadius: 4,
        border: !hasBorder ? "none" : "1px solid #ececec",
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default ExpoSnackPreview