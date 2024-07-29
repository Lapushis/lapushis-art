import clsx from 'clsx'

const Avatar = () => {
  return (
    <div class="avatar not-prose p-6">
      <div class="ring-base-content ring-offset-base-100 ring ring-offset-1 w-full rounded-full">
        <img src="/main/ava.png" />
      </div>
    </div>
  )
}

const Images = () => {
  return (
    <div class="flex rounded-box space-x-2">
      {[
        '/main/main1.png',
        '/main/main6.png',
        '/main/main5.png',
        '/main/main3.png',
        '/main/main2.png',
        '/main/main4.png',
      ].map((image, index) => (
        <div
          class={clsx(
            'flex-1 not-prose max-h-[100rem]',
            index > 2 && 'max-md:hidden',
            index > 3 && 'max-lg:hidden'
          )}
        >
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  )
}

const Main = () => {
  return (
    <>
      <Images />
      <div className="flex mt-4">
        <div className=" prose max-w-prose text-lg text-justify">
          <h1 className="text-5xl mb-2">Lapushis</h1>
          <h2 className="my-2">Freelance Furry Artist</h2>
          <p>
            I'm Lapushis (Lap), 2D/3D artist. I'm bringing colorful
            illustrations with adorable characters to life. I enjoy drawing my
            pictures and try to make them better each time I make them.
          </p>
          <p>
            I use a wide variety of tools including Adobe Photoshop, Blender,
            ZBrush, Maya and other artistic software. I am always eager to learn
            more about the tools of my craft, as well as expand on their
            assortment.
          </p>
          <p>
            This is my personal website. Here you can check out my gallery of
            selected works. If you are interested in commissioning me, check out
            Prices and ToS page for further information.
          </p>
          <p>Thank you for being here!</p>
        </div>
        <div className="flex-grow-0 hidden md:block">
          <Avatar />
        </div>
      </div>
    </>
  )
}

export default Main
