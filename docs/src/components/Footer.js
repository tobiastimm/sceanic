import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16232a;
  width: 100%;
  padding: 16px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  border-top: 1px solid #16232a;
  opacity: 0.75;
  a {
    color: #99c794;
    text-decoration: none;
    text-align: center;
  }

  .highlight {
    color: #6699cc;
    font-weight: bold;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/tobiastimm/">
        Made with ❤️️ by <span className="highlight">Tobias Timm</span> -
        Copyright 2018
      </a>
    </StyledFooter>
  )
}

export default Footer
