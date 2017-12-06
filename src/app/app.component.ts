import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './service/rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; 

  constructor(private restService: RestService){}

  ngOnInit(){
      this.restService.getData().subscribe(data=>{
        console.log(data)
      })
  }

}
