import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosInstance = axios.create({});

interface ApiConnectorParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';  // Limiting HTTP methods
  url: string;
  bodyData?: Record<string, any> | null;
  headers?: Record<string, string> | null;
  params?: Record<string, string | number | boolean> | null;
}

export const apiConnector = async <T>({
  method,
  url,
  bodyData,
  headers,
  params,
}: ApiConnectorParams): Promise<AxiosResponse<T>> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  };

  return axiosInstance(config);
};
