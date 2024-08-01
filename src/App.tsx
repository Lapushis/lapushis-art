import { LocationProvider, Route, Router } from 'preact-iso'

import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Header from 'components/Header'
import Main from 'components/Main'

export default function () {
  return (
    <LocationProvider>
      <div className="min-h-screen flex flex-col justify-between bg-base-200">
        <div className="flex-grow-0">
          <Header />
        </div>
        <div className="flex-grow flex-shrink-0">
          <Router>
            <Route path="/" component={Main} />
            <Route path="/gallery" component={Gallery} />
            <Route
              path="/prices-and-tos"
              component={() => <h1>Prices and TOS</h1>}
            />
            <Route
              default
              component={() => <Route path="/" component={Main} />}
            />
          </Router>
        </div>
        <div className="flex-grow-0">
          <Footer />
        </div>
      </div>
    </LocationProvider>
  )
}
