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
    </div>
  </Layout>
)

export default IndexPage
