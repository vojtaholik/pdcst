/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import {
  FaPlay as PlayIcon,
  FaExternalLinkAlt as ExternalLinkIcon,
} from "react-icons/fa"

function Header({ context, episode, image, ref }) {
  const playbtn = React.useRef(null)

  React.useEffect(() => {
    playbtn.current.focus()
  }, [])

  return (
    <header
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundImage: image
          ? "none"
          : "linear-gradient(224deg, #6dbaed 0%, #4871c3 100%)",
        justifyContent: "flex-end",
        color: "text",
        "h1, h5": { m: 0 },
        h5: { mt: 5, fontSize: 1, opacity: 0.6 },
      }}
    >
      {image && <Img fluid={image.childImageSharp.fluid} />}
      <div
        sx={{
          p: "15px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <button
          ref={playbtn}
          sx={{
            width: 55,
            height: 55,
            background: "transparent",
            border: "1px solid",
            borderColor: "text",
            color: "text",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            mr: 10,
            mt: 8,
            svg: {
              mt: 1,
              ml: 2,
            },
          }}
          onClick={() => context.setCurrentPlaying(episode)}
        >
          <PlayIcon />
        </button>
        <div sx={{ display: "flex", flexDirection: "column", flex: "1 1 0" }}>
          <h1>{episode.title}</h1>
          <h5>EP{episode.number}</h5>
        </div>
      </div>
    </header>
  )
}

export default Header
