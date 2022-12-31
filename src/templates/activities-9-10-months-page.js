import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const Activities910PageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="pinterest">
                <a
                  data-pin-do="buttonBookmark"
                  href="https://www.pinterest.com/pin/create/button/"
                ></a>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Activities910PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Activities910Page = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Activities910PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Activities910Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Activities910Page;

export const activities910PageQuery = graphql`
  query Activities910Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
