import axiosClient from '@/libs/axiosClient'
import type { LoginInterface, RegisterInterface } from '@/types/login'

class AuthRequest  {

  async login(params: LoginInterface) {
    return await axiosClient.post('/login', params);
  }

  async register(params: RegisterInterface) {
    return await axiosClient.post('/register', params);
  }
}

export default new AuthRequest();
