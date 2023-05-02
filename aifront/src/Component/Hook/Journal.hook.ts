import { useMutation, useQuery } from 'react-query'
import { createJournal, getJournals } from '../Api/PostJournal'

export const useCreateJournal = () => {
  const {mutate, ...rest} = useMutation(createJournal)

  return {
    createJournal: mutate,
    ...rest
  }
}

export const useJournalList = () => {
    // const {data, ...rest} = useQuery('getJournalList', getJournals)

    // return {
    //   journalList: data?.data || [],
    //   ...rest
    // }
  }