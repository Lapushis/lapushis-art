import { lazy, Suspense } from 'preact/compat'
import { Redirect, Route, Router, Switch } from 'wouter-preact'
import { useHashLocation } from 'wouter-preact/use-hash-location'

const AgeModal = lazy(() => import('components/AgeModal'))
const Footer = lazy(() => import('components/Footer'))
const Gallery = lazy(() => import('components/Gallery'))
const Header = lazy(() => import('components/Header'))
const Main = lazy(() => import('components/Main'))
const Price = lazy(() => import('components/Price'))

export default function () {
  return (
    <Router hook={useHashLocation}>
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading loading-dots loading-lg mx-auto scale-150"></span>
          </div>
        }
      >
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
      </Suspense>
    </Router>
  )
}
