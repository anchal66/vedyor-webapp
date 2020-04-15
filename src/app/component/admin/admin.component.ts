import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  auths;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    window.scroll(0, 500);
    if (localStorage.getItem("vedyurlogin")) {
      this.authService.loggedIn = true;
    }
    this.authService.getAuth().subscribe(data => {
      // console.log("auths: ",data)
      this.auths = data
    },
      error => console.log("Got error receiving Auths", error))
  }
  onPost() {
    let fakeForm = {
      email: "niket@vedyur.com",
      password: "niketvedyur"
    }
    let dataRepeated = false;
    for (let auth of this.auths) {
      if (fakeForm.email == auth.email && fakeForm.password == auth.password) {
        dataRepeated = true;
        break;
      }
    }
    if(!dataRepeated){
      this.authService.postAuth(fakeForm).subscribe(data => console.log("Admin Success: "),
        error => console.log("admin error", error));
    }

  }

  onSubmit(form) {
    form = form.value;
    for (let auth of this.auths) {
      if (form.email == auth.email && form.password == auth.password) {
        localStorage.setItem("vedyurlogin", "true");
        this.authService.loggedIn = true;
        console.log("logged in")
      }
    }
  }

  signOut() {
    localStorage.removeItem("vedyurlogin");
    this.authService.loggedIn = false;
  }

}
