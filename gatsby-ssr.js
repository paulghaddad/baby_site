import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="//assets.pinterest.com/js/pinit.js"
      src="//assets.pinterest.com/js/pinit.js"
      defer
    />,
  ]);
};
