import React from 'react';

export const CodesandboxPreview = ({
  path = '',
  width = "100%",
  height = 500,
  theme = "dark",
}) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${path}?autoresize=1&fontsize=14&hidenavigation=1&theme=${theme}`}
      width={width}
      height={height}
      style={{ borderRadius: 4, border: "none", overflow: "hidden" }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default CodesandboxPreview;
