import { useMutation, useQuery } from 'react-query'
import { getCommunityList, postCommunity, getCommunityDetail } from '../Api/Community'
import { BoardModel } from '../../Types/Community.type'

export const useCommunityList = (page: number, elements: number) => {
  const {data, ...rest} = useQuery(['getCommunityList', page, elements], () => {
    return getCommunityList(page, elements)
  },{
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  }
  );
  return {
    communityList: data?.data.items || [],
    totalPage: data?.data.totalPages || 0,
    ...rest,
  }
};

export const usePostCommunity = () => {
  const { mutate, isError } = useMutation(postCommunity)

  return {
    postCommunity: mutate, isError
  }
}

export const useCommunityDetail = (id : number) => {
  const {data, ...rest} = useQuery(['getCommunityDetail', id], () => {
    return getCommunityDetail(id)
  })

  return {
    item : data?.data.item,
    ...rest
  }
}