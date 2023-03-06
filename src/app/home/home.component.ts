import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  showResponse(event:any) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}

  ngOnInit(): void {
  }

}
