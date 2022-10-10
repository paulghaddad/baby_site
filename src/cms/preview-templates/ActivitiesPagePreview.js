import React from "react";
import PropTypes from "prop-types";
import { ActivitiesPageTemplate } from "../../templates/activities-page";

const ActivitiesPagePreview = ({ entry, widgetFor }) => (
  <ActivitiesPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ActivitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ActivitiesPagePreview;
