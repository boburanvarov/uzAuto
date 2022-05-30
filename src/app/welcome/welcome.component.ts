import { Component, OnInit } from '@angular/core';
import {TestService} from "../shared/services/test.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    const body = {
      username: 'DavrUzAvto',
      password: 'davr2001'
    }
    this.testService.login(body).subscribe((res)=>{

      console.log(res)
      sessionStorage.setItem('login' ,JSON.stringify(res))
    })
  }

}
