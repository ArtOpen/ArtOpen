import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import config from '../../config'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'
import ModalCall from '../components/ModalCall'
import NewsCall from '../components/NewsCall'
import BlogRoll2 from '../components/BlogRoll2'

const ArticlePage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, subtitle, meta_title, meta_description, cover, date, tags, keywords } } } } = props

  return (
    <Layout>
      <section className='section'>
        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_description}
          keywords={keywords}
          cover={cover.publicURL}
          slug={slug}
          date={date}
          siteTitleAlt={config.siteTitleAlt}
          userName={config.userName}
          siteTitle={config.siteTitle}
          siteUrl={config.siteUrl}
          siteFBAppID={config.siteFBAppID}
          userTwitter={config.userTwitter}
          pathPrefix={config.pathPrefix}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={html}
                contentComponent={HTMLContent}
                cover={cover.publicURL}
                meta_title={meta_title}
                meta_desc={meta_description}
                tags={tags}
                title={title}
                subtitle={subtitle}
                date={date}
              />
              <Share
                title={title}
                slug={slug}
                excerpt={meta_description}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />
              <hr />
              <Disqus
                title={title}
                slug={slug}
                siteUrl={config.siteUrl}
                disqusShortname={config.disqusShortname}
              />

            </div>
          </div>

          <br />
          <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
          <Link className='button-green' style={{fontSize:'15px'}} to='/oferta/'> Poznaj nasz?? ofert??&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='button-green' style={{fontSize:'15px'}} to='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='button-green' style={{fontSize:'15px'}} to='/kontakt/'> Skontaktuj si?? z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
          </div>

        </div>
      </section>
      <NewsCall />
      <br /><br />
      <h5 className='is-title' style={{fontSize:'30px',margin:'50px'}}> Przeczytaj <b style={{color:'#00d1b2'}}>wi??cej</b>: </h5>

      <div style={{textAlign:'center',margin:'50px'}}>
      <BlogRoll2 />
      <br />
      <br />
      <Link className='button-green' style={{fontSize:'18px'}} to='/blog/'> Wr???? na bloga &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
      <br />
      </div>
      <ModalCall />
    </Layout>



  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "DD. MM. YYYY")
        title
        subtitle
        cover {
            childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
            publicURL
        }
        meta_title
        meta_description
        tags
        keywords
      }
    }
  }
`
