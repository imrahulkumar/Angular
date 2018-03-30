import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {

   return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map( (res)=>{
      // response = res;

      console.log(res.json().token);

        if(res && res.json().token)
        {

          localStorage.setItem('token', res.json().token);
          return true;
        }
       return false;

      })



  }

  logout() {

    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return false;
  }
}

