import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn:boolean=false;


 login(password:string)
  { if(password==="shakthiman")
    {
      this.isLoggedIn=true;
    }
    else{
      alert("Incorrect Passcode🗨")
      this.isLoggedIn=false;
    }
  }
  logout()
  {
    this.isLoggedIn=false;
  }
   loginStatus()
  {
return this.isLoggedIn;
  }
}
