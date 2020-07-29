import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "./style.css"

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>Author:{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id} style={{ "list-style": "none" }}>
          <Link to={`/Article_${article.id}`}>
            <div className="card">
              <div className="left-img">
                <Img fixed={article.image.childImageSharp.fixed} />
              </div>
              <div className="right-content">
                <h3 style={{ "font-weight": "bold", color: "black" }}>
                  {article.title}
                </h3>

                <h5 style={{ color: "black" }}>{data.strapiUser.username}</h5>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
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
      }
    }
  }
`
