import React from 'react'
import PropTypes from 'prop-types'
import { BabyLogPageTemplate } from '../../templates/baby-log-page'

const BabyLogPagePreview = ({ entry, widgetFor }) => (
  <BabyLogPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BabyLogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BabyLogPagePreview
