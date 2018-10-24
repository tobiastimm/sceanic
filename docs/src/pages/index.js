import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import LanguageList from '../components/LanguageList'

const IndexPage = () => (
  <Layout>
    <p>
      Sceanic is a vscode theme combining the best parts of spacegray and
      oceanic next with some personal finishes. Heavily inspired by the great DA
      CS themes for sublime, I've ported my favorite to vscode.
    </p>
    <LanguageList />
  </Layout>
)

export default IndexPage
