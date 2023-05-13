import '@/styles/globals.css'
import Layout from '../Layouts'

export default function App({ Component, pageProps }) {
  let layouts = {
    'L1' : Layout
  }
  let Wrapper = layouts[Component.layout]

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
