import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AllService} from "../../shared/services/all.service";
import {TestService} from "../../shared/services/test.service";
import {Filials} from "../../shared/interfaces/filials.interfaces";

@Component({
  selector: 'app-contract-block',
  templateUrl: './contract-block.component.html',
  styleUrls: ['./contract-block.component.scss']
})


export class ContractBlockComponent implements OnInit {

  constructor(
    private allService: AllService,
    private testService: TestService,
    private cd: ChangeDetectorRef,
  ) { }

  filialGroups: any[]=[] ;
  uzauto: Filials[]=[];
  uzAutoModels: any[]= [];
  filialId: any;



  ngOnInit(): void {

    this.getBrends()



  }

  onChange(value:any) {
    console.log(value.target.value);
    // console.log(value)

    const item = value.target.value;
    const filial =  this.filialGroups.filter((f)=> {
      if(f.name == item){
        this.filialId = f.filial_id
      }
    });

    console.log(  this.filialId, 'filId')
  }

  getBrends(){
    this.testService.getBrend().subscribe((res)=>{
      console.log(res, 'res')
      this.uzauto = res[0].filial_id;
      this.cd.detectChanges();
      this.postsave()
    })
  }

  postsave(){
    const data={
      filial_id: this.uzauto
    }


    this.testService.postModel(data).subscribe((res)=>{
      console.log(res, 'model')
      this.uzAutoModels = res
    })

    this.testService.postDealers(data).subscribe((res)=>{
      console.log(res, 'diler')
      this.filialGroups = res
    })

  }

}
