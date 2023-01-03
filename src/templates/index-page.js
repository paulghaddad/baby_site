import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 className="feature-header">Activities for Babies</h2>
                  <Features gridItems={intro.blurbs} />

                  <h2 className="feature-header">My Recent Posts</h2>

                  <div className="column is-12">

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/8-things-a-baby-will-teach-you">
                        <div>
                          <h3>8 Things Your Baby Will Teach You</h3>
                        </div>
                      </Link>
                      <p>December 30, 2022</p>
                      <p>One of the best parts about being a parent is how much you learn each day.</p>
                    </section>

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/how-to-be-productive-and-be-a-parent">
                        <div>
                          <h3>How to Be Productive and Be a Parent</h3>
                        </div>
                      </Link>
                      <p>December 21, 2022</p>
                      <p>6 ways to make your productivity soar as a parent.</p>
                    </section>

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/the-power-of-a-daily-routine-for">
                        <div>
                          <h3>The Power of a Daily Routine for Baby</h3>
                        </div>
                      </Link>
                      <p>December 16, 2022</p>
                      <p>Happy baby. Happy parents. Everyone wins.</p>
                    </section>

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/the-secret-making-your-own-purees">
                        <div>
                          <h3>The Secret Making Your Own Purées for Baby</h3>
                        </div>
                      </Link>
                      <p>December 1, 2022</p>
                      <p>I got some blank stares when I told people I was going to make my own purées for Hayden. “That’ll last about a week,” I could hear them thinking. </p>
                    </section>

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/the-best-toys-for-babies-arent-toys">
                        <div>
                          <h3>The Best Toys for Babies Aren't Toys</h3>
                        </div>
                      </Link>
                      <p>November 18, 2022</p>
                      <p>Keep it simple. Keep it real. And let creativity thrive.</p>
                    </section>

                    <section className="section">
                      <Link to="https://entrepreneurialparent.substack.com/p/babies-need-unstructured-playtime">
                        <div>
                          <h3>Babies Need Unstructured Playtime, Too!</h3>
                        </div>
                      </Link>
                      <p>November 18, 2022</p>
                      <p>Why you should include unstructured playtime for baby</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            header
            text
            url
          }
          heading
          description
        }
      }
    }
  }
`;
