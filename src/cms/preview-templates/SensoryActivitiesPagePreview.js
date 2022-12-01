import React from "react";
import PropTypes from "prop-types";
import { SensoryActivitiesPageTemplate } from "../../templates/sensory-activities-page";

const SensoryActivitiesPagePreview = ({ entry, widgetFor }) => (
  <SensoryActivitiesPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

SensoryActivitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SensoryActivitiesPagePreview;
