import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = () => {
  const metadata = useStaticQuery(graphql`
    query siteMetadata {
      dataJson {
        conferenceName
        conferenceDescription
        conferenceSiteURL
        copyrightImage {
          name
          src {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        social {
          twitter
        }
      }
    }
  `)

  const {
    conferenceName: title,
    conferenceDescription: description,
    conferenceSiteURL: url,
    copyrightImage: { src: { childImageSharp: { fixed: image }}},
    social: { twitter },
  } = metadata.dataJson



  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )

}

export default SEO
