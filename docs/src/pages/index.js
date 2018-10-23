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
  mdiVisualStudioCode,
} from '@mdi/js'

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 5px;
`

const Screen = styled.img`
  padding: 0;
  margin: 0;
`

const LanguageList = styled.ul`
  list-style-type: none;
  display: grid;
  width: 300px;
  grid-template-columns: repeat(auto-fit, minMax(20px, 1fr));
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Screen src={Screenshot} alt="vscode" />
      <LanguageList>
        <li>
          <Icon path={mdiVisualStudioCode} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiLanguageJavascript} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiLanguageTypescript} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiReact} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiLanguageHtml5} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiLanguageCss3} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiSass} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiJson} size={1} color="#ced4de" />
        </li>
        <li>
          <Icon path={mdiLanguageJava} size={1} color="#ced4de" />
        </li>
      </LanguageList>
    </Container>
  </Layout>
)

export default IndexPage
