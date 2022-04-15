import { ChangeEventHandler, useState } from "react"

const useTextInput = (
  initial = ""
): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [state, setState] = useState(initial)
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setState(target.value)

  return [state, onChange]
}

export default useTextInput
