interface ICommissionCardProps {
  title: string
  body: string
  price: string
  images: string[]
  moreExamplesLink?: string
  splitSymbol?: string
}

const CommissionTypeCard = ({
  title,
  body,
  price,
  images,
  moreExamplesLink,
  splitSymbol,
}: ICommissionCardProps) => {
  const renderBody = splitSymbol ? (
    body
      .split(splitSymbol)
      .map((text) => text.trim())
      .filter(Boolean)
      .map((text, index) => (
        <p className="text-lg my-2" key={`body-${index}`}>
          {text.trim()}
        </p>
      ))
  ) : (
    <p className="text-lg">{body}</p>
  )

  return (
    <div className="card bg-base-200 shadow-xl mt-8">
      <div className="card-body flex flex-col md:flex-row justify-between">
        <div className="prose max-w-prose">
          <h2 className="card-title text-3xl">{title}</h2>
          {renderBody}
          {moreExamplesLink && (
            <p className="text-lg">
              <a href={moreExamplesLink} rel={'noreferrer'} target={'_blank'}>
                [More examples]
              </a>
            </p>
          )}
        </div>
        <div className="divider md:divider-horizontal justify-self-end" />
        <div>
          <h3 className="text-2xl md:text-4xl font-bold justify-self-end">
            {price}
          </h3>
        </div>
      </div>

      <figure className="relative">
        <div className="rounded-box flex flex-col gap-4 min-[750px]:flex-row  min-[750px]:max-h-[450px]">
          {images.map((src, index) => (
            <div
              key={`image-${index}`}
              class=" flex-shrink flex-grow-0 basis-auto max-w-fit"
            >
              <img src={src} class="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </figure>
    </div>
  )
}

const COMMISSION_INFO = [
  {
    title: 'Footshot',
    body: `Full rendered artwork centered around character's foot/feet.
$100 per 1 character. Max 2 characters per picture.
Simple background included in the price.`,
    price: '$100',
    images: [
      '/price/footshot1.png',
      '/price/footshot2.png',
      '/price/footshot3.png',
    ],
    moreExamplesLink:
      'https://www.furaffinity.net/gallery/lapushis/folder/1398863/Footshot',
    splitSymbol: '.',
  },
  {
    title: 'Mawshot',
    body: `Full rendered artwork centered around character's maw.
100$ per 1 character. Each additional character +40-50$, no more than 2 additional characters (including micros).
Simple background included in the price.`,
    price: '$100',
    images: ['/price/mawshot1.png'],
    moreExamplesLink:
      'https://www.furaffinity.net/gallery/lapushis/folder/1450386/Mawshot',
    splitSymbol: '.',
  },
  {
    title: 'Halfbody',
    body: `Full rendered artwork.
120-150$ per 1 character depending on design complexity, background included.
Very complex background +30$.
Each additional character +80-110$, no more than 2 additional characters. Micro random characters don't count.`,
    price: '$120-150',
    images: [
      '/price/halfbody1.png',
      '/price/halfbody2.png',
      '/price/halfbody3.png',
    ],
    moreExamplesLink:
      'https://www.furaffinity.net/gallery/lapushis/folder/1398864/Halfbody',
    splitSymbol: '.',
  },
  {
    title: 'Fullbody',
    body: `Full rendered artwork.
160-190$ per 1 character depending on design complexity, background included.
Very complex background +30$.
Each additional character +140-160$, no more than 2 additional characters. Micro random characters don't count.`,
    price: '$160-190',
    images: [
      '/price/fullbody1.png',
      '/price/fullbody2.png',
      '/price/fullbody3.png',
    ],
    moreExamplesLink:
      'https://www.furaffinity.net/gallery/lapushis/folder/1398865/Fullbody',
    splitSymbol: '.',
  },
  {
    title: 'Panorama',
    body: `You can add a 360° panorama to your commission for $40.`,
    price: '+$40',
    images: ['/price/panorama1.png'],
    moreExamplesLink:
      'https://www.furaffinity.net/gallery/lapushis/folder/1430774/360-Panorama',
  },
  {
    title: 'Extras',
    body: `Alt versions $15 each /
Panels are $20-40 each, depending on complexity /
Your specific micro character $30-50 each. Micro random characters don't count /
Private commissions + 50% of the total price /
My characters are welcome to be featured in your commissions, but I will not draw them in any type of sexual intercourse (regardless of fetish or topic) /
Payment plan is available for every type of work (40$ per month minimum installments).`,
    price: 'Price varies',
    images: ['/price/additional1.png', '/price/additional2.png'],
    splitSymbol: '/',
  },
]

const Price = () => {
  return (
    <div className="flex-grow container max-w-screen-lg mx-auto p-4 bg-base-100">
      <div className="prose max-w-prose text-lg mb-8">
        <p>Thank you for taking interest in my commissions! </p>

        <p>
          I accept commissions through{' '}
          <a
            href="https://forms.gle/tSxfsrErYvvfu9VYA"
            target="_blank"
            rel="noreferrer"
          >
            [google form]
          </a>
        </p>

        <p>Alternatively you can reach me through platforms or messengers:</p>

        <ul>
          <li>
            <a
              href="https://www.furaffinity.net/newpm/lapushis/"
              target="_blank"
              rel="noreferrer"
            >
              [FurAffinity Notes]
            </a>
          </li>
          <li>
            <a
              href="https://www.deviantart.com/lapushis"
              target="_blank"
              rel="noreferrer"
            >
              [Deviantart]
            </a>
          </li>
          <li>
            <a href="https://t.me/Lapushis" target="_blank" rel="noreferrer">
              [Telegram]
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/296626217581412353/"
              target="_blank"
              rel="noreferrer"
            >
              [Discord]
            </a>
          </li>
        </ul>

        <p>
          I work according to my{' '}
          <a
            href="https://docs.google.com/document/d/1SWVlIPoaf6AIOumF-YYNG2J-9IF9bmeqex4rigDA9d0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            [Terms of Service]
          </a>
        </p>
      </div>
      <div className="divider uppercase text-2xl">Commission types</div>
      {COMMISSION_INFO.map((info, index) => (
        <CommissionTypeCard {...info} key={`card-${index}`} />
      ))}
    </div>
  )
}

export default Price
