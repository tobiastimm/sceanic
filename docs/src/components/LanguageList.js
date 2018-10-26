import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
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
  },
  {
    path: mdiGraphql,
    alt: 'graphql',
  },
  {
    path: mdiLanguageJavascript,
    alt: 'js',
  },
  {
    path: mdiLanguageTypescript,
    alt: 'ts',
  },
  {
    path: mdiLanguageHtml5,
    alt: 'html',
  },
  {
    path: mdiLanguageCss3,
    alt: 'css',
  },
  {
    path: mdiSass,
    alt: 'scss',
  },
  {
    path: mdiJson,
    alt: 'json',
  },
  {
    path: mdiLanguageJava,
    alt: 'java',
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

function findImage(name, images) {
  const image = images.find(({ node: { fluid } }) =>
    fluid.originalName.includes(name)
  )
  if (image) {
    return image.node.fluid
  }
  return ''
}

class LanguageList extends Component {
  state = {
    languages: languages,
    activeLanguage: 0,
    activeImage: {
      alt: languages[0].alt,
      src: findImage(languages[0].alt, this.props.images),
    },
  }

  handleClick = index => {
    this.setState({ activeImage: null })
    this.setState(prevState => ({
      activeLanguage: index,
      activeImage: {
        alt: languages[index].alt,
        src: findImage(languages[index].alt, this.props.images),
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
                <Img
                  style={{ ...styles }}
                  fluid={activeImage.src}
                  alt={activeImage.alt}
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
