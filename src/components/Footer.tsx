import Bluesky from 'components/icons/Bluesky'
import DA from 'components/icons/DA'
import FA from 'components/icons/FA'
import Twitter from 'components/icons/Twitter'

const START_YEAR = 2024

const getCopyrightYears = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return currentYear === START_YEAR
    ? `${currentYear}`
    : `${START_YEAR}-${currentYear}`
}

const Footer = () => {
  return (
    <footer className="flex-grow-0 z-10 sticky bottom-0 bg-base-100">
      <div className="container max-w-screen-lg mx-auto p-4 flex justify-between items-center">
        <p>
          <span className="hidden sm:inline hover:text-primary">
            Made with ❤️ by{' '}
            <a
              href="https://www.furaffinity.net/user/b1gb4db4t"
              target="_blank"
              rel="noopener noreferrer"
            >
              B1G_B4D_B4T
            </a>{' '}
            |{' '}
          </span>
          © {getCopyrightYears()}
        </p>
        <nav className="uppercase flex gap-4">
          <a
            className="hover:text-primary flex items-center"
            href="https://furaffinity.net/user/lapushis/"
            target="_blank"
          >
            <FA className="w-10 h-10 lg:w-6 lg:h-6 fill-current inline mr-2" />
            <span className="max-lg:hidden">Furaffinity</span>
          </a>
          <a
            className="hover:text-primary flex items-center"
            href="https://twitter.com/lapushis"
            target="_blank"
          >
            <Twitter className="w-10 h-10 lg:w-6 lg:h-6 fill-current inline mr-2" />
            <span className="max-lg:hidden">Twitter</span>
          </a>
          <a
            className="hover:text-primary flex items-center"
            href="https://bsky.app/profile/lapushis.art"
            target="_blank"
          >
            <Bluesky className="w-10 h-10 lg:w-6 lg:h-6 fill-current stroke-none inline mr-2" />
            <span className="max-lg:hidden">Bluesky</span>
          </a>
          <a
            className="hover:text-primary flex items-center"
            href="https://www.deviantart.com/lapushis"
            target="_blank"
          >
            <DA className="w-10 h-10 lg:w-6 lg:h-6 fill-current stroke-none inline mr-2" />
            <span className="max-lg:hidden">Deviantart</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
