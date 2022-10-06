import React from "react";
import PropTypes from "prop-types";
import { Activities34PageTemplate } from "../../templates/activities-3-4-months-page";

const Activities34PagePreview = ({ entry, widgetFor }) => (
  <Activities34PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

Activities34PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default Activities34PagePreview;
