import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {AppProvider} from "../components/context"

function MyApp({ Component, pageProps }) {
  return <>
  <AppProvider>
    <div className="font-roboto selection:text-pink-300">

  <Navbar/>
  <div className="min-h-[74vh]">
  <Component {...pageProps} />
  </div>
  <Footer/>
    </div>
  </AppProvider>
  </>
}

export default MyApp
