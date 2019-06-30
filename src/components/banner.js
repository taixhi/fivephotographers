/**
 * Banner component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
    bannerImage: file(absolutePath: { regex: "/banner-image.jpg/" }) {
        childImageSharp {
            fluid(maxWidth: 1920) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid_noBase64
            }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.bannerImage.childImageSharp.fluid}
        alt={author}
        style={{
            'height': '500px',
            'left' : '50%',
            'margin-left' : '-50vw',
            'margin-right' : '-50vw',
            'max-width' : '100vw',
            'position' : 'relative',
            'right' : '50%',
            'width' : '100vw',
        }}
        imgStyle={{

        }}
      />
    </div>
  )
}

export default Banner
