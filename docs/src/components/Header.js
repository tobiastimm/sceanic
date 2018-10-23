import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  background-image: linear-gradient(
    #16232a 5%,
    transparent 75%,
    transparent 100%
  );

  h1 {
    font-weight: 400;
    text-align: center;
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  .purple {
    color: #c695c6;
  }

  .oceanic {
    color: #6699cc;
  }

  .red {
    color: #ec5f66;
  }

  .yellow {
    color: #fac761;
  }

  .green {
    color: #99c794;
  }

  .orange {
    color: #f99058;
  }

  .comment {
    color: #66747f;
  }

  p {
    text-align: center;
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="title">
      <div className="flex-centered">
        <h1>
          <span className="purple">S</span>
          <span className="oceanic">c</span>
          <span className="red">e</span>
          <span className="yellow">a</span>
          <span className="green">n</span>
          <span className="orange">i</span>
          <span className="comment">c</span>
        </h1>
      </div>
      <p>What happens when Spacegray meets Oceanic Next?</p>
    </div>
  </StyledHeader>
)

export default Header
