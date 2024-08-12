import chunk from 'lodash/chunk'
import { useState } from 'preact/hooks'

const PICTURE_COUNT = 16
const PICTURES = Array(PICTURE_COUNT)
  .fill(null)
  .map((_, index) => `/gallery/${(index % PICTURE_COUNT) + 1}.png`)

const MAX_COLS = 3

const Lightbox = ({
  image,
  setImage,
}: {
  image: string | null
  setImage: (image: string | null) => void
}) => {
  if (!image) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh]"
      onClick={() => setImage(null)}
    >
      <div className="relative flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="w-full h-full max-w-[100vw] max-h-[100vh] object-scale-down"
        />
      </div>
    </div>
  )
}

const Grid = ({
  images,
  setImage,
}: {
  images: string[]
  setImage: (image: string) => void
}) => {
  const imageChunks = chunk(images, Math.ceil(images.length / MAX_COLS))

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {imageChunks.map((chunk, chunkIndex) => (
        <div className="grid gap-4" key={`chunk-${chunkIndex}`}>
          {chunk.map((src, index) => (
            <div
              className="rounded-lg overflow-hidden"
              key={`panel-${index}`}
              onClick={() => {
                setImage(src)
              }}
            >
              <img class="h-full w-full object-cover" src={src} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const Gallery = () => {
  const [image, setImage] = useState<string | null>(null)

  return (
    <div className="container max-w-screen-lg mx-auto p-4 bg-base-100">
      <Grid images={PICTURES} setImage={setImage} />
      <Lightbox image={image} setImage={setImage} />
    </div>
  )
}

export default Gallery
