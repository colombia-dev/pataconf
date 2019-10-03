import React from "react"
import styled from "styled-components"

const OuterSection = styled.section`
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
  display: flex;
  justify-content: center;
`

const InnerSection = styled.div`
  width: 100vw;
  max-width: 1280px;
`

export const Section = ({ id, secondary, bgImage, children, className }) => (
  <OuterSection id={id} className={className} secondary={secondary} bgImage={bgImage}>
    <InnerSection>
      {children}
    </InnerSection>
  </OuterSection>
)
