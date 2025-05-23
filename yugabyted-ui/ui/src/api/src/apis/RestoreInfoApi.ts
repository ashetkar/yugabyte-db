// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery, useInfiniteQuery, useMutation, UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions } from 'react-query';
import Axios from '../runtime';
import type { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {
  ApiError,
} from '../models';

import type { InlineResponse2002 } from '../models/InlineResponse2002';

/**
 * Retrieve the list of databases on which restore is run in the YugabyteDB cluster.
 * Get Restore Details
 */

export const getRestoreDetailsAxiosRequest = (
  customAxiosInstance?: AxiosInstance
) => {
  return Axios<InlineResponse2002>(
    {
      url: '/restore',
      method: 'GET',
      params: {
      }
    },
    customAxiosInstance
  );
};

export const getRestoreDetailsQueryKey = (
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/restore`,
  pageParam,
];


export const useGetRestoreDetailsInfiniteQuery = <T = InlineResponse2002, Error = ApiError>(
  options?: {
    query?: UseInfiniteQueryOptions<InlineResponse2002, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  pageParam = -1,
  version = 1,
) => {
  const queryKey = getRestoreDetailsQueryKey(pageParam, version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useInfiniteQuery<InlineResponse2002, Error, T>(
    queryKey,
    () => getRestoreDetailsAxiosRequest(customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};

export const useGetRestoreDetailsQuery = <T = InlineResponse2002, Error = ApiError>(
  options?: {
    query?: UseQueryOptions<InlineResponse2002, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  version = 1,
) => {
  const queryKey = getRestoreDetailsQueryKey(version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useQuery<InlineResponse2002, Error, T>(
    queryKey,
    () => getRestoreDetailsAxiosRequest(customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};





