import { useAtom } from 'jotai'

import ageRestrictionPassAtom from 'atoms/age-restriction'
import { useEffect } from 'preact/hooks'

const MODAL_ID = 'age-restriction-modal'

const showModal = () => {
  const modal = document.getElementById(MODAL_ID) as HTMLDialogElement
  modal.showModal()
}

const hideModal = () => {
  const modal = document.getElementById(MODAL_ID) as HTMLDialogElement
  modal.close()
}

const AgeModal = () => {
  const [ageRestrictionPass, setAgeRestrictionPass] = useAtom(
    ageRestrictionPassAtom
  )

  useEffect(() => {
    if (!ageRestrictionPass) {
      showModal()
    } else {
      hideModal()
    }
  }, [ageRestrictionPass])

  return (
    <dialog
      id={MODAL_ID}
      className="modal modal-bottom lg:modal-middle"
      open={false}
    >
      <div className="modal-box">
        <h3 className="font-bold text-3xl mb-4">Hold on!</h3>
        <p className="text-xl mb-4">
          You must be over 18 years old to visit this website!
        </p>
        <div className="modal-action flex flex-col sm:flex-row gap-4 justify-between">
          <a
            className="btn btn-lg btn-error flex-grow !m-0"
            href="https://www.google.com"
            target="_self"
            rel="noreferrer"
          >
            Get me outa here!
          </a>
          <button
            className="btn btn-lg btn-primary flex-grow !m-0"
            onClick={() => setAgeRestrictionPass(true)}
          >
            Yep, I'm old enough
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default AgeModal
