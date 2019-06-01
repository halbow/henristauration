import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  onSubmit(content) {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    this.mailService.send(this.name, this.email, this.message).subscribe(
      res => {
        alert(res['data']);
      }
    );
  }
}
