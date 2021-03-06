import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
import GameCategories from "../components/Games/GameCategories"

const CategorySingleTemplate = ({ data, pageContext, location }) => {
  const categoria = data.contentfulCategoriaDelJuego
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Categoria" />
      <HeroWave
        heading={categoria.title}
        subtitle={
          categoria.childContentfulCategoriaDelJuegoCategoryDescriptionRichTextNode
        }
        pattern="bg-orange-600 text-orange-500 "
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />

      <div className="pb-24">
        {categoria.articulos ? (
          <Container>
            {categoria.articulos.map((item, i) => (
              <GameCard card={item} key={item.slug} />
            ))}
          </Container>
        ) : (
          <div className="py-24 text-center text-gray-700 ">
            Aún no hay juegos asignados a esta modalidad
          </div>
        )}

        <h4 className="max-w-6xl py-6 mx-auto mb-6 font-serif text-xl font-bold text-orange-500 border-t border-orange-200">
          Todas las modalidades de juegos
        </h4>
        <GameCategories />

        <div
          className="hidden w-full max-w-2xl m-auto article"
          id={categoria.slug}
        >
          <PageNav>
            <div>
              {prev && (
                <Link to={`/categorias/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link to={`/categorias/${kebabCase(next.slug)}/`} rel="next">
                  {next.title} →
                </Link>
              )}
            </div>
          </PageNav>
        </div>
      </div>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4`}
`

const PageNav = styled.nav`
  ${tw`flex justify-between py-12`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-indigo-300`}
  }
`

export default CategorySingleTemplate

export const pageQuery = graphql`
  query EspacioBySlug($slug: String!) {
    contentfulCategoriaDelJuego(slug: { eq: $slug }) {
      id
      title
      slug
      childContentfulCategoriaDelJuegoCategoryDescriptionRichTextNode {
        json
      }
      articulos {
        title
        slug
        GameBuyPrice
        GamePlayers
        GameDuration
        GameAuthor
        GameAges
        GamePlay {
          file {
            url
          }
        }

        categoria {
          title
          slug
        }

        GameGallery {
          title
          fluid(maxWidth: 1600) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyContentfulFluid_withWebp
          }
          fixed(width: 150, height: 150) {
            ...GatsbyContentfulFixed
          }
        }
        imagenDestacada {
          fixed(width: 500, height: 500) {
            ...GatsbyContentfulFixed
          }
          file {
            url
          }
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
