import { Link, useLocation } from 'wouter-preact'

const usePageName = () => {
  const [path] = useLocation()

  switch (path) {
    case '/gallery':
      return 'Gallery'
    case '/prices-and-tos':
      return 'Prices and ToS'
    default:
      return ''
  }
}

const Logo = () => {
  const pageName = usePageName()

  return (
    <h3 className="text-xl font-bold">
      <a className="uppercase text-3xl" href="/">
        Lapushis {pageName && `| ${pageName}`}
      </a>
    </h3>
  )
}

const NavLinksContent = () => {
  return (
    <>
      <li>
        <Link class="hover:text-primary" href="/gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link class="hover:text-primary" href="/prices-and-tos">
          Prices and ToS
        </Link>
      </li>
    </>
  )
}

const FIXED_LINKS_CONTENT = [
  {
    name: 'Kofi',
    link: 'https://ko-fi.com/lapushis',
    img: '/kofi.png',
  },
  // {
  //   name: 'Patreon',
  //   link: 'https://patreon.com/lapushis',
  //   img: '/patreon.png',
  // },
]

const FixedLink = ({
  name,
  link,
  img,
}: {
  name: string
  link: string
  img: string
}) => {
  return (
    <a class="flex items-center hover:text-primary" href={link} target="_blank">
      <img className="h-12" src={img} />
      <span className="max-lg:hidden text-xl font-bold ml-2">{name}</span>
    </a>
  )
}

const Header = () => {
  return (
    <header className="flex-grow-0 z-10 bg-base-100 sticky top-0">
      <div className="flex bg-transparent container max-w-screen-lg mx-auto p-4  items-center justify-between">
        <div className="flex items-center">
          <div className="dropdown block lg:none">
            <div tabindex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav>
              <ul
                tabindex={0}
                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLinksContent />
              </ul>
            </nav>
          </div>
          <Logo />
        </div>

        <nav className="flex justify-end items-center">
          <div className="hidden lg:flex">
            <ul className="px-2 flex justify-between items-center gap-3 text-xl">
              <NavLinksContent />
            </ul>
          </div>
          <div className="flex gap-4 ml-4">
            {FIXED_LINKS_CONTENT.map(({ name, img, link }) => (
              <FixedLink key={link} name={name} link={link} img={img} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
