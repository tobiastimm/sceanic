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
import { Transition, config } from 'react-spring'

import Language from './Language'

const languages = [
  {
    path: mdiReact,
    alt: 'react',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/react.png',
  },
  {
    path: mdiGraphql,
    alt: 'graphql',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/graphql.png',
  },
  {
    path: mdiLanguageJavascript,
    alt: 'js',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/js.png',
  },
  {
    path: mdiLanguageTypescript,
    alt: 'ts',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/ts.png',
  },
  {
    path: mdiLanguageHtml5,
    alt: 'html',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/html.png',
  },
  {
    path: mdiLanguageCss3,
    alt: 'css',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/css.png',
  },
  {
    path: mdiSass,
    alt: 'scss',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/scss.png',
  },
  {
    path: mdiJson,
    alt: 'json',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/json.png',
  },
  {
    path: mdiLanguageJava,
    alt: 'java',
    src:
      'https://res.cloudinary.com/tobiastimm/image/upload/c_limit,w_1000/v1540570600/sceanic/java.png',
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
    activeImage: {
      alt: languages[0].alt,
      src: languages[0].src,
    },
  }

  handleClick = index => {
    this.setState({ activeImage: null })
    this.setState(prevState => ({
      activeLanguage: index,
      activeImage: {
        alt: languages[index].alt,
        src: languages[index].src,
      },
    }))
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
          <Transition
            items={this.state.activeImage}
            keys={item => item.alt}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0, display: 'none' }}
            config={config.gentle}
          >
            {activeImage =>
              activeImage &&
              (styles => (
                <img
                  style={{ ...styles }}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width="1000"
                  height="808"
                />
              ))
            }
          </Transition>
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
