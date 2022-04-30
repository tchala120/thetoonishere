import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { SWRConfiguration } from 'swr'

export interface RequestOptions<Data = any, Variables = any> {
  axiosConfig?: AxiosRequestConfig<Variables>
  swrConfig?: SWRConfiguration<
    AxiosResponse<Data, Variables>,
    AxiosError<Data, Variables>
  >
}
