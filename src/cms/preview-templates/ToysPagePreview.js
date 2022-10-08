import React from 'react'
import PropTypes from 'prop-types'
import { ToysPageTemplate } from '../../templates/toys-page'

const ToysPagePreview = ({ entry, widgetFor }) => (
  <ToysPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ToysPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ToysPagePreview
