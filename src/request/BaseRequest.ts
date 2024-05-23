import axiosClient from "@/libs/axiosClient";

export class BaseRequest {
  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  async list(params?: object) {
    return await axiosClient.get(this.resource, params);
  }


  async show(id: number) {
    return await axiosClient.get(`${this.resource}/${id}`);
  }

  async post(payload: object) {
    return await axiosClient.post(`${this.resource}`,{ ...payload });
  }

  async put(id: number, payload: object) {
    return await axiosClient.put(`${this.resource}/${id}`, { ...payload });
  }

  async delete(id: number) {
    return await axiosClient.delete(`${this.resource}/${id}`);
  }
}
