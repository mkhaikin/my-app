import $api from '../http'
import {AxiosResponse} from 'axios'
import { AuthResponse } from '../types/IAuthResp'
//for test only
import {IUser} from '../types/IUser'

export default class AuthService {
    static async login(email: string, password: string): Promise< AxiosResponse<AuthResponse>>{
       
        console.log("login start post....");
      
        const postresp = await $api.post<AuthResponse>('/login', {email, password})        

        console.log("postresp: " + postresp.data.user.position);

        return postresp
    }

    static async logintest(email: string, password: string){

        console.log("login start post.... Testing: " + email + ", " + password);
     
        return  { user: {email: 'me@abcd.com', workid: '10', position: 'Admin'}     }
    }



    static async logout(user_id:number): Promise<AxiosResponse<any>> {
        return $api.post('/logout', {user_id})
    }
}