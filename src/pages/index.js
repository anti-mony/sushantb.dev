import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import { IndexList } from "../data/IndexList";

import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-content">
      <div className="index-image">
        <Image />
      </div>

      <Typography variant="h3">
        <div className="light-text">Hi, I'm</div>
      </Typography>

      <Typography variant="h2" gutterBottom>
        <div className="center-text bold-text">{IndexList.name.first + " " + IndexList.name.middle + " " + IndexList.name.last}</div>
      </Typography>

      <Typography variant="body1"></Typography>

      <Typography variant="body1" component="div">
        <div className="center-text">
          {IndexList.title}
        </div>
      </Typography>

      <Typography variant="body1" component="div">
        <div className="center-text">
          {IndexList.subtitle}
        </div>
      </Typography>


      {/* Remove if change icon */}
      <Typography variant="body2" component="div">
        <div className="center-text">
          Site Icon :{" "}
          <a href="https://icons8.com/icon/92054/puzzle">Puzzle icon by Icons8</a>
        </div>
      </Typography>


    </div>
  </Layout>
)

export default IndexPage

