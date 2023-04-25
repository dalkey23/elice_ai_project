import { createJournal, getJournals } from "../networks/journal";
import { useMutation, useQuery } from 'react-query'

export const useCreateJournal = () => {
  const {mutate, ...rest} = useMutation(createJournal)

  return {

    createJournal: mutate,
    ...rest
  }
}

export const useJournalList = () => {
  const {data, ...rest} = useQuery('getJournalList', getJournals)


  return {
    journalList: data?.data || [],
    ...rest
  }
}
