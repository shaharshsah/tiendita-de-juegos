import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import { FiChevronRight } from "react-icons/fi"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import AboutImage from "../images/kallpa-ludica.png"

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
import "../components/AwsBtn.css"

import { navigate } from "gatsby" // highlight-line

export default () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>

      <HeroWave
        heading="Kallpa Lúdica"
        pattern="bg-orange-600 text-orange-500"
        svg="M0,128L720,256L1440,128L1440,320L720,320L0,320Z"
      />
      <div className="pt-12 pb-24 bg-white">
        <div className="flex flex-col items-center justify-center max-w-3xl p-3 py-2 mx-auto">
          <AwesomeButton
            action={() => {
              navigate(`/juegos/`)
            }}
            type="primary"
          >
            Conocé la Tiendita de juegos
            <FiChevronRight className="inline-block mt-1 ml-3" />
          </AwesomeButton>
        </div>
      </div>
      <AwesomeSlider>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
      </AwesomeSlider>
    </Layout>
  )
}
