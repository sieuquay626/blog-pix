import React from "react"
import { graphql, Link } from "gatsby"
import renderHTML from "react-render-html"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "./style.css"
const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiArticle.edges.map(document => {
        return (
          <li style={{ listStyle: "none" }} key={document.node.id}>
            <Link
              to={`/${document.node.id}`}
              style={{ "text-decoration": "none", color: "#000" }}
            >
              <div className="card">
                <div className="left-img">
                  <Img fixed={document.node.image.childImageSharp.fixed} />
                </div>
                <div className="right-content">
                  <h3 style={{ "font-weight": "bold" }}>
                    {document.node.title}
                  </h3>

                  <h5>{document.node.author.username}</h5>
                </div>
              </div>
            </Link>
            <br />
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          author {
            id
            username
          }
        }
      }
    }
  }
`

// <p>
// {" "}
// {`${renderHTML(
//   document.node.content.split("\n").splice(0, 3).join("\n")
// )}
// ....`}
// </p>
