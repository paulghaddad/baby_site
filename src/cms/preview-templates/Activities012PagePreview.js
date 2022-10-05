import React from "react";
import PropTypes from "prop-types";
import { Activities012PageTemplate } from "../../templates/activities-0-12-weeks-page";

const Activities012PagePreview = ({ entry, widgetFor }) => (
  <Activities012PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

Activities012PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default Activities012PagePreview;
