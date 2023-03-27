import { Dispatch, SetStateAction } from 'react'

type Props = {
  waitForClick: boolean
  setWaitForClick: Dispatch<SetStateAction<boolean>>
}

const Settings = ({ waitForClick, setWaitForClick }: Props) => {
  function handleClick() {
    setWaitForClick(!waitForClick)
  }

  return (
    <div className="flex w-11/12 items-center justify-center rounded-5 border-4 border-gray-300 bg-white px-3 py-2 text-2xl leading-7 text-gray-800 outline outline-2 outline-gray-600 drop-shadow-soft">
      <div className="flex items-center gap-4">
        <label className="">Wait for click/keypress to restart Level</label>
        <input
          type="checkbox"
          className="h-5 w-5 rounded bg-gray-300 text-green-600 ring-offset-2 transition-colors duration-100 hover:bg-green-200 hover:text-green-500 focus:ring-green-400"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
export default Settings
