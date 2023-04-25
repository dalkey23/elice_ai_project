import { createJournal } from "../networks/journal";
import { useMutation } from 'react-query'

export const useCreateJournal = () => {
  const {mutate, ...rest} = useMutation(createJournal)

  return {

    createJournal: mutate,
    ...rest
  }
}