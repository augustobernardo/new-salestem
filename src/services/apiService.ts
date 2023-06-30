import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export default {
  async get<T>(resource: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(`${API_BASE_URL}/${resource}`);
    return response.data;
  },
  async post<T>(resource: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(`${API_BASE_URL}/${resource}`, data);
    return response.data;
  },
  async update<T>(resource: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axios.put(`${API_BASE_URL}/${resource}`, data);
    return response.data;
  },
  async delete<T>(resource: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.delete(`${API_BASE_URL}/${resource}`);
    return response.data;
  }
};
