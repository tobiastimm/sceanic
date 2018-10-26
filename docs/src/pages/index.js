import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import LanguageList from '../components/LanguageList'

const Container = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 18.75rem 23.125rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5rem;
`

const Description = styled.div``

const Download = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  label {
    font-size: 0.75rem;
    font-weight: 400;
    color: #66747f;
    line-height: 1.125rem;
    text-transform: uppercase;
  }

  .code {
    width: 100%;
  }

  pre {
    display: flex;
    margin-top: 0.5rem;
    background-color: #0f1e28;
    border-radius: 0.25rem;
    padding: 0.5625rem 0.75rem 0.625rem;
    position: relative;
    overflow-x: auto;
  }
  pre code {
    display: inline-block;
    counter-reset: linenumbers;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: 400;
    color: #6b717d;
    line-height: 1.3125rem;
  }

  .instructions-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.625rem;
  }

  .instructions-header > label {
    margin-right: 0.625rem;
  }

  .download-btn {
    font-family: monospace;
    font-weight: 700;
    display: inline-block;
    padding: 1rem 2.875rem;
    line-height: 1 !important;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #ced4de;
    letter-spacing: 0.8px;
    cursor: pointer;
    box-shadow: 0 14px 20px 0 rgba(15, 20, 25, 0.1);
    transition: all 0.25s ease;
    background-color: #343d46;
    &:hover {
      background-color: #64727f;
    }
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <LanguageList />
      <Container>
        <Description>
          <p>
            Sceanic is a Visual Studio Code theme combining the best parts of 🚀
            Spacegray and 🌊 Oceanic Next with some personal finishes 💅.
          </p>
          <p>
            Heavily inspired by the great DA CS themes for Sublime Text, I've
            ported my favorite one to vscode.
          </p>
        </Description>
        <Download>
          <div className="install-container-wrapper">
            <h2>
              <span>Install</span>
            </h2>
            <p>Do you want to try Sceanic?</p>
            <div className="cli">
              <label>Install via CLI</label>
              <div className="code">
                <pre>
                  <code>
                    <span>$ </span>
                    code --install-extension tobiastimm.sceanic
                  </code>
                </pre>
              </div>
            </div>
            <div className="cli">
              <div className="instructions-header">
                <label>Install via</label>
                <svg
                  className="vs-code"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                >
                  <path
                    fill="#66747f"
                    d="M21.9980902,7.05213528 L22,24.9558586 L17.0004653,27 L8.24542044,18.3059039 L2.9904497,22.3987722 L1,21.3771089 L1.00199979,10.6348745 L3.00181348,9.60581456 L8.26108889,13.7020894 L16.9946509,5 L21.9980902,7.05213528 Z M16.4966475,12.1654844 L11.4990677,15.9880111 L16.4986023,19.8405089 L16.4966475,12.1654844 Z M3.4986824,13.7064321 L3.50168388,18.3041032 L5.99842148,15.9897298 L3.4986824,13.7064321 Z"
                    transform="translate(-1 -5)"
                  />
                </svg>
              </div>
              <a
                className="download-btn"
                href="https://marketplace.visualstudio.com/items?itemName=tobiastimm.sceanic"
              >
                Download
              </a>
            </div>
          </div>
        </Download>
      </Container>
    </Layout>
  )
}

export default IndexPage
