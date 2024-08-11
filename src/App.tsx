import { LocationProvider, Route, Router } from 'preact-iso'

import AgeModal from 'components/AgeModal'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Header from 'components/Header'
import Main from 'components/Main'
import Price from 'components/Price'

export default function () {
  return (
    <LocationProvider>
      <AgeModal />
      <div className="min-h-screen flex flex-col justify-between bg-base-200">
        <div className="flex-grow-0">
          <Header />
        </div>
        <Router>
          <Route path="/" component={Main} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/prices-and-tos" component={Price} />
          <Route
            default
            component={() => <Route path="/" component={Main} />}
          />
        </Router>
        <div className="flex-grow-0">
          <Footer />
        </div>
      </div>
    </LocationProvider>
  )
}
