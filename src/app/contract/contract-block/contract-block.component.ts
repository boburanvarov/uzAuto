import { Component, OnInit } from '@angular/core';
import {AllService} from "../../shared/services/all.service";

@Component({
  selector: 'app-contract-block',
  templateUrl: './contract-block.component.html',
  styleUrls: ['./contract-block.component.scss']
})
export class ContractBlockComponent implements OnInit {

  constructor(private allService: AllService) { }

  ngOnInit(): void {
    this.getBrends()
  }


  getBrends(){
    this.allService.getBrend().subscribe((res)=>{
      console.log(res)
    })
  }

}
