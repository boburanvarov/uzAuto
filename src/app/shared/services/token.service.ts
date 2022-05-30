import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})


export class TokensService {
  constructor(){}

   getToken(){
    // @ts-ignore
     const token = JSON.parse(sessionStorage.getItem('login'))
    return !token ? null : token.accessToken
   }
}
