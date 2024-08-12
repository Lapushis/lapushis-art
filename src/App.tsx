import { Redirect, Route, Router, Switch } from 'wouter-preact'
import { useHashLocation } from 'wouter-preact/use-hash-location'

import AgeModal from 'components/AgeModal'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Header from 'components/Header'
import Main from 'components/Main'
import Price from 'components/Price'

export default function () {
  return (
    <Router hook={useHashLocation}>
      <AgeModal />
      <div className="min-h-screen flex flex-col justify-between bg-base-200">
        <Header />
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/prices-and-tos">
            <Price />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
