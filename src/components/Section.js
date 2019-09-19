import styled from "styled-components"

export const Section = styled.section`
  padding-top: 7.42857143em;
  padding-bottom: 7.42857143em;
  ${({ secondary, bgImage }) =>
    secondary
      ? "background-color: #fafafa;"
      : bgImage
      ? ""
      : "border-top: 1px solid #ebebeb;"}

  ${({ bgImage }) => `\
    background-image: url(\"${bgImage}\");\
    background-size: cover;\
    width: 100vw;\
    height: 100vh;\
  `}
`
