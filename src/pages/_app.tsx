import { AppProps } from "next/app"
import Image from "next/future/image"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"
import { globalStyles } from "../styles/global"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
