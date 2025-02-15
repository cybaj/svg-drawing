import { MarkGithub } from '@styled-icons/octicons/MarkGithub'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { Flex, Box, Text, Link as RELink } from 'rebass/styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body, * {
   margin: 0;
   box-sizing: border-box;
 }

  a {
    color: initial;
    text-decoration: initial;
  }
`

const GlobalHeader = () => (
  <Box bg="#fafafa" py="8px" px="16px">
    <Flex justifyContent="space-between">
      <Box width={3 / 10}>
        <Link href={`/`}>
          <a>
            <Text
              fontSize={3}
              as="h1"
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              svg-drawing
            </Text>
          </a>
        </Link>
      </Box>
      <Flex as="nav" alignContent="center" width={6 / 10}>
        <Link href="/">
          <a>
            <Text mr={2}>drawing</Text>
          </a>
        </Link>
        <Text mr={2}>
          <Link href="/demo/animation">
            <a>animation</a>
          </Link>
        </Text>
        <Text mr={2}>
          <Link href="/demo/img-trace">
            <a>img-trace</a>
          </Link>
        </Text>
      </Flex>
      <Box width={1 / 10} style={{ textAlign: 'right' }}>
        <RELink color="#000" href="https://github.com/kmkzt/svg-drawing">
          <MarkGithub size="24" />
        </RELink>
      </Box>
    </Flex>
  </Box>
)

const Layout: React.SFC<{
  title?: string
}> = ({ children, title = '' }) => {
  return (
    <Fragment>
      <Head>
        <title>{`svg-drawing ${title}`}</title>
      </Head>
      <GlobalStyle />
      <GlobalHeader />
      <Box py="12px" px={['2vw', '2vw', '5vw']}>
        {children}
      </Box>
    </Fragment>
  )
}

export default Layout
