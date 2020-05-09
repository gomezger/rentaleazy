import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Info } from 'src/app/services/info';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../rentals/rentals.component.scss',
    '../index/packages/packages.component.scss'
  ],
  providers: [
    MessageService
  ]
})
export class ContactComponent implements OnInit {
  public info: any;
  public name: string;
  public phone: string;
  public email: string;
  public message: string;

  constructor(
    public translate: TranslateService,
    public _messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.info = Info;
    this.setData();
  }

  setData(){
    this.translate.get('contact.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }

  onSubmitContacto(){    

    document.getElementById('send').classList.remove('d-none');
    document.getElementById('success').classList.add('d-none');
    document.getElementById('error').classList.add('d-none');
    document.getElementById('error-server').classList.add('d-none');

    this._messageService.send(this.name,this.phone,this.email,this.message).subscribe(
      response => {
        if(response.status=='success'){

          document.getElementById('send').classList.add('d-none');
          document.getElementById('success').classList.remove('d-none');

        }else if(response.status=='error'){
          document.getElementById('send').classList.add('d-none');

          if(response.code=='480'){
            document.getElementById('error').classList.remove('d-none');
          }else if(response.code=='481'){
            document.getElementById('error-server').classList.remove('d-none');
          }
        }
      },
      error => {
          console.log(<any>error);
      } 
   );
  }

}
