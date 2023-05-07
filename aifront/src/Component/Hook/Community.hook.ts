import { useMutation, useQuery } from 'react-query'
import { postCommunity, getCommunityDetail } from '../Api/Community'

{/*export const useCommunityList = (page: number, limit: number) => {
  const {data, ...rest} = useQuery(['getCommunityList', page, limit], () => {
    return getCommunityList(page, limit)
  }, {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })

  return {
    communityList: data?.data.items || [],
    totalPage: data?.data.totalPages,
    ...rest
  }
}*/}

export const usePostCommunity = () => {
  const { mutate } = useMutation(postCommunity)

  return {
    postCommunity: mutate
  }
}

export const useCommunityDetail = (id : number) => {
  const {data, ...rest} = useQuery(['getCommunityDetail', id], () => {
    return getCommunityDetail(id)
  })

  return {
    // item : data?.data.items,
    item : data?.data,
    ...rest
  }
}