import React, { Component } from 'react'
import styled from 'styled-components'

import {
  mdiJson,
  mdiSass,
  mdiReact,
  mdiLanguageJava,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiGraphql,
} from '@mdi/js'
import Language from './Language'

const languages = [
  {
    path: mdiReact,
    screen: require('../images/react.png'),
  },
  {
    path: mdiGraphql,
    screen: require('../images/graphql.png'),
  },
  {
    path: mdiLanguageJavascript,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiLanguageTypescript,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiLanguageHtml5,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiLanguageCss3,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiSass,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiJson,
    screen: require('../images/screenshot.png'),
  },
  {
    path: mdiLanguageJava,
    screen: require('../images/screenshot.png'),
  },
]
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 3.75rem minmax(500px, 1000px);
  grid-template-rows: 1fr 22px;
  margin-bottom: 4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  margin: 0;
  width: 100%;
  padding: 0.625rem 0;
  grid-template-rows: repeat(auto-fill, minmax(3.125rem, 1fr));
  background: #16232a;
`

const Screen = styled.img`
  padding: 0;
  margin: 0;
`

const StatusBar = styled.div`
  background: #0f1e28;
  color: #4f5b66;
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    margin: 0;
    padding: 0 0.625rem;
    font-size: 0.75rem;
  }
  a {
    color: #4f5b66;
    text-decoration: none;
  }
`

class LanguageList extends Component {
  state = {
    languages: languages,
    activeLanguage: 0,
  }

  handleClick = index => {
    this.setState({ activeLanguage: index })
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <StyledList>
            {this.state.languages.map((language, index) => (
              <Language
                onClick={() => this.handleClick(index)}
                active={index === this.state.activeLanguage}
                key={`lang_${index}`}
                path={language.path}
              />
            ))}
          </StyledList>
          <Screen
            src={this.state.languages[this.state.activeLanguage].screen}
            alt="test"
          />
          <StatusBar>
            <p>
              Font: <a href="https://dank.sh">Dank Mono</a>
            </p>
          </StatusBar>
        </Container>
      </Wrapper>
    )
  }
}

export default LanguageList
