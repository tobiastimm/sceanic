import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Screenshot from '../images/screenshot.png'
import Icon from '@mdi/react'
import {
  mdiJson,
  mdiSass,
  mdiReact,
  mdiLanguageJava,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
} from '@mdi/js'

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
`

const Screen = styled.img`
  padding: 0;
  margin: 0;
`

const LanguageList = styled.ul`
  list-style-type: none;
  display: grid;
  margin: 0;
  width: 100%;
  padding: 20px;
  grid-template-rows: repeat(auto-fit, minMax(30px, 5%));
  background: #16232a;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <p>
      Sceanic is a vscode theme combining the best parts of spacegray and
      oceanic next with some personal finishes. Heavily inspired by the great DA
      CS themes for sublime, I've ported my favorite to vscode.
    </p>
    <Container>
      <LanguageList>
        <li>
          <Icon path={mdiLanguageJavascript} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiLanguageTypescript} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiReact} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiLanguageHtml5} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiLanguageCss3} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiSass} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiJson} size={1} color="#65737f" />
        </li>
        <li>
          <Icon path={mdiLanguageJava} size={1} color="#65737f" />
        </li>
      </LanguageList>
      <Screen src={Screenshot} alt="vscode" />
    </Container>
  </Layout>
)

export default IndexPage
