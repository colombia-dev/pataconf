import styled from "styled-components"

export const Section = styled.section`
  position: relative;
  ${({ secondary, bgImage }) =>
    secondary
      ? "background-color: #fafafa;"
      : bgImage
      ? ""
      : "border-top: 1px solid #ebebeb;"}

  ${({ bgImage }) => bgImage ? `\
    // background-image: url(\"${bgImage}\");\
    background-size: cover;\
    width: 100vw;\
    height: 100vh;\
  ` : ""}
`
