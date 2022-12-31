import React from "react";
import PropTypes from "prop-types";
import { Activities910PageTemplate } from "../../templates/activities-9-10-months-page";

const Activities910PagePreview = ({ entry, widgetFor }) => (
  <Activities910PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

Activities910PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default Activities910PagePreview;
