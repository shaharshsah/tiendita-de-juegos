import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"
import { FaCaretRight } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
export default ({ card }) => (
  <GameCard>
    <Link to={`/juegos/${kebabCase(card.slug)}/`}>
      {card.imagenDestacada ? (
        <div className=" image">
          <Img
            title={card.title}
            className="w-full"
            alt={card.title}
            fluid={card.imagenDestacada.fluid}
          />
        </div>
      ) : (
        <img
          className="w-48 h-48 mx-auto my-6 opacity-25 "
          alt="Kallpa Lúdica"
          src={AboutImage}
        />
      )}
      <div className="relative w-full px-3 pb-10 font-serif text-left">
        <h3 className="block pt-3 pb-1 text-base font-bold sm:pb-8 sm:pr-16 sm:h-16 md:pb-0 ">
          {card.title}
        </h3>
        {card.stock ? (
          <b className="absolute top-0 right-0 block pt-3 pb-6 pr-1 font-bold text-gray-600 text-md">
            {card.stock}
          </b>
        ) : (
          <b className="top-0 right-0 block text-xl font-bold text-green-600 sm:absolute sm:pt-3 sm:pb-6 sm:pr-1">
            ${card.GameBuyPrice}
          </b>
        )}

        {card.GameAges && (
          <div className="hidden w-full pt-1 text-left game-ages">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <div className="flex flex-col flex-1 text-base opacity-75">
                {card.GameAges}+ años
                <small className="text-xs ">Edades sugeridas</small>
              </div>
            </div>
          </div>
        )}
        {card.GameDuration && (
          <div className="hidden w-full pt-1 text-left game-duration">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <div className="flex flex-col flex-1 text-base opacity-75">
                {card.GameDuration} min.
                <small className="text-xs ">Tiempos de partida</small>
              </div>
            </div>
          </div>
        )}
        {card.GamePlayers && (
          <div className="hidden w-full pt-1 text-left game-players">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <div className="flex items-baseline flex-1">
                {card.GamePlayers}
                <span className="pl-1 text-xs ">Jugadores</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 px-3 font-serif text-sm font-bold text-left text-green-800 transition-all duration-500 bg-green-100 hover:text-white hover:bg-green-600">
        Consultar
        <FaCaretRight className="text-lg text-green-300" />
      </div>
    </Link>
    <Toggle
      title={card.title}
      slug={card.slug}
      age={card.GameAges}
      publisher={card.publisher}
      categoria={card.categoria}
      duration={card.GameDuration}
      players={card.GamePlayers}
    />
  </GameCard>
)

const GameCard = styled.div`
  ${tw`relative w-full mb-3 overflow-hidden bg-gray-100 rounded-lg md:max-w-md`}

  .image {
    ${tw`relative w-48 h-48 overflow-hidden transition-all duration-500 transform md:w-full`}
  }

  .image:hover {
    ${tw`scale-105`}
  }
`
