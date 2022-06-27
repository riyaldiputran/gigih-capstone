import '../styles/globals.css'
import MobileContainer from '../Layout/MobileContainer'

function MyApp({ Component, pageProps }) {
  return (
    <MobileContainer>
      <Component {...pageProps} />
    </MobileContainer>
  )
}

export default MyApp
