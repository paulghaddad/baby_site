import React from "react";
import PropTypes from "prop-types";
import { ParentResourcesPageTemplate } from "../../templates/parent-resources-page";

const ParentResourcesPagePreview = ({ entry, widgetFor }) => (
  <ParentResourcesPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ParentResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ParentResourcesPagePreview;
