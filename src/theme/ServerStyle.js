// /src/theme/ServerStyle.js
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter, useLocation } from "react-router-dom";

function ServerStyle({ from: children }) {
  let style = null;

  const location = useLocation();
  const sheet = new ServerStyleSheet();

  try {
    renderToString(
      sheet.collectStyles(
        <StaticRouter location={location}>
            {children}
        </StaticRouter>
      )
    );
    style = sheet.getStyleElement();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return style;
}

function ClientStyle() {
  return null;
}

export default typeof window === "undefined" ? ServerStyle : ClientStyle;
