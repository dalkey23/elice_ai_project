import { useMutation, useQuery } from 'react-query'
import { postCommunity } from '../Api/Community'

export const usePostCommunity = () => {
  const { mutate } = useMutation(postCommunity)

  return {
    postCommunity: mutate
  }
}