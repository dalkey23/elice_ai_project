import { useMutation, useQuery } from 'react-query'
import { createJournal, getJournals, getJournalsDetail } from '../Api/PostJournal'

export const useCreateJournal = () => {
  const {mutate, ...rest} = useMutation(createJournal)

  return {
    createJournal: mutate,
    ...rest
  }
}

export const useJournalList = (page: number, elements: number) => {
    const {data, ...rest} = useQuery(['getJournalList', page, elements], () => {
      return getJournals(page, elements)
    }, {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    })

    return {
      journalList: data?.data.items || [],
      totalPage: data?.data.totalPages,
      ...rest
    }
  }

export const useJournalDetail = (id : number) => {
    const {data, ...rest} = useQuery(['getJournalDetail', id], () => {
      return getJournalsDetail(id)
    }, {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    })

    return {
      items : data?.data.items || [],
      ...rest
    }
  }
