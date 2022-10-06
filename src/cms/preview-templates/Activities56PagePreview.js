import React from "react";
import PropTypes from "prop-types";
import { Activities56PageTemplate } from "../../templates/activities-5-6-months-page";

const Activities56PagePreview = ({ entry, widgetFor }) => (
  <Activities56PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

Activities56PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default Activities56PagePreview;
