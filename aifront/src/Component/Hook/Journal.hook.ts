import { useMutation, useQuery } from 'react-query'
import { createJournal } from '../Api/PostJournal'

export const useCreateJournal = () => {
  const {mutate, ...rest} = useMutation(createJournal)

  return {

    createJournal: mutate,
    ...rest
  }
}