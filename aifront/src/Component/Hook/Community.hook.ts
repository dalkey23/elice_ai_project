import { useMutation, useQuery } from 'react-query'
import { postCommunity, getCommunityDetail } from '../Api/Community'

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
    item : data?.data.item || [],
    ...rest
  }
}