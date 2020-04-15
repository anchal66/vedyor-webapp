import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  success;

  ContactsData;

  constructor(private contactService: ContactService, public authService:AuthService) { }

  ngOnInit(): void {
    window.scroll(0, 500);
    this.contactService.getContact().subscribe(data=>{
      this.ContactsData = data;
    });
  }
  postContact(form: NgForm){
    console.log("Form:", form.value);
    this.contactService.postContact(form.value).subscribe(data=>
      {
        this.success = true;
        console.log("Success Contact", data);
        form.reset();
      },
      error=> console.log("error", error));
  }

}
