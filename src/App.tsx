import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'
import { LocationProvider, Route, Router } from 'preact-iso'

export default function () {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-base-200">
      <Header />
      <div className="flex-grow container max-w-screen-lg mx-auto p-4 bg-base-100">
        <LocationProvider>
          <Router>
            <Route path="/" component={Main} />
            <Route path="/gallery" component={() => <h1>Gallery</h1>} />
            <Route
              path="/prices-and-tos"
              component={() => <h1>Prices and TOS</h1>}
            />
            <Route
              default
              component={() => <Route path="/" component={Main} />}
            />
          </Router>
        </LocationProvider>
      </div>
      <Footer />
    </div>
  )
}
