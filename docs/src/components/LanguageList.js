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
  mdiVisualStudioCode,
} from '@mdi/js'
import Language from './Language'

const languages = [
  {
    path: mdiReact,
    screen: require('../images/react.png'),
  },
  {
    path: mdiGraphql,
    screen: require('../images/screenshot.png'),
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
  grid-template-columns: 80px minmax(500px, 1000px);
  margin-bottom: 4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  margin: 0;
  width: 100%;
  padding: 10px 0;
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
  background: #16232a;
`

const Screen = styled.img`
  padding: 0;
  margin: 0;
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
        </Container>
      </Wrapper>
    )
  }
}

export default LanguageList
