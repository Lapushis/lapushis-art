import { FC } from 'preact/compat'

const Avatar: FC = () => {
  return (
    <div class="avatar not-prose">
      <div class="w-24 rounded-full">
        <img src="/avatar.png" />
      </div>
    </div>
  )
}

export default Avatar
