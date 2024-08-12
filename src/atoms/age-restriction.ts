import { atomWithStorage } from 'jotai/utils'

const ageRestrictionPassAtom = atomWithStorage(
  'lapushis.art:age-restriction-pass',
  false
)

export default ageRestrictionPassAtom
