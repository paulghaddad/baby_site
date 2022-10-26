import React from "react";
import PropTypes from "prop-types";
import { Activities78PageTemplate } from "../../templates/activities-7-8-months-page";

const Activities78PagePreview = ({ entry, widgetFor }) => (
  <Activities78PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

Activities78PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default Activities78PagePreview;
