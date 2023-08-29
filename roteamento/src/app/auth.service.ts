import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.U7kppt5OhcXcK83sexK0WAUZl8L02S-GTGJnoGEvQ1c"

  constructor() { }

  estaAutenticado() : boolean{
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, senha: string) : boolean{
    if(email === "admin@admin.com.br" && senha === "123456"){
      sessionStorage.setItem("access-token",this.accessToken)
      return true;
    }

    return false;

  }

  logout(){
    sessionStorage.clear();
  }
}
