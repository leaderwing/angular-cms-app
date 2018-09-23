import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from  '@angular/forms';
@Component({
  selector: 'app-contact-com',
  templateUrl: './contact-com.component.html',
  styleUrls: ['./contact-com.component.css']
})
export class ContactComComponent implements OnInit {

  title : string;
  sender : string;
  phone : string;
  email : string;
  content : string;
  formdata;
  constructor() {
   }

  ngOnInit() {
    this.formdata = new FormGroup (
      {
        title : new FormControl(""),
        sender : new FormControl(""),
        phone : new FormControl(""),
        email : new FormControl(""),
        content : new FormControl("")
      }
    );
  }
  onClickSubmit(data)
  {
  }

}
