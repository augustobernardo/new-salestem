import axios, { AxiosResponse } from 'axios';
import { ToastifyClass } from '../utils/scripts/ToastifyClass';

const toastify = new ToastifyClass()
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
  async update<T>(resource: string, id: number, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axios.put(`${API_BASE_URL}/${resource}/${id}`, data);
    toastify.success('Atualizado com sucesso!');
    return response.data;
  },
  async delete<T>(resource: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.delete(`${API_BASE_URL}/${resource}`);
    return response.data;
  }
};
