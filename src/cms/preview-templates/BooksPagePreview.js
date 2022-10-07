import React from 'react'
import PropTypes from 'prop-types'
import { BooksPageTemplate } from '../../templates/books-page'

const BooksPagePreview = ({ entry, widgetFor }) => (
  <BooksPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BooksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BooksPagePreview
