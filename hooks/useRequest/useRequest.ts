import useSWR from 'swr'
import axios, { AxiosError, AxiosResponse } from 'axios'

import type { RequestOptions } from './types'

const useRequest = <Data = any, Variables = any>(
  key: string,
  options?: RequestOptions<Data, Variables>
) => {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data, Variables>, AxiosError<Data, Variables>>(
    key,
    () =>
      axios.request({
        ...options?.axiosConfig,
        url: key,
      }),
    options?.swrConfig
  )

  const loading = response == null && error == null

  return {
    loading,
    response,
    error,
    isValidating,
    mutate,
  }
}

export default useRequest
