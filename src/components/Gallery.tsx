import chunk from 'lodash/chunk'

const PICTURE_COUNT = 16
const PICTURES = Array(PICTURE_COUNT)
  .fill(null)
  .map((_, index) => `/gallery/${(index % PICTURE_COUNT) + 1}.png`)

const MAX_COLS = 3

const Grid = ({ images }: { images: string[] }) => {
  const imageChunks = chunk(images, MAX_COLS)

  return (
    <div
      class={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${MAX_COLS} gap-4`}
    >
      {imageChunks.map((chunk, chunkIndex) => (
        <div className="grid gap-4" key={`chunk-${chunkIndex}`}>
          {chunk.map((src, index) => (
            <div className="rounded-lg overflow-hidden" key={`panel-${index}`}>
              <img class="h-full w-full object-cover" src={src} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const Gallery = () => {
  return (
    <div className="container max-w-screen-lg mx-auto p-4 bg-base-100">
      <Grid images={PICTURES} />
    </div>
  )
}

export default Gallery
