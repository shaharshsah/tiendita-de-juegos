import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

const QueryPublisherComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryPublisherQuery {
      editoriales: allContentfulEditorial(sort: { fields: title }) {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.editoriales.edges.map(({ node }) => {
        return (
          <Link key={node.slug} to={`/editoriales/${kebabCase(node.slug)}/`}>
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryPublisherComponent
