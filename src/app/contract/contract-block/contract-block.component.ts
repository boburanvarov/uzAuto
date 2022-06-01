import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AllService} from "../../shared/services/all.service";
import {TestService} from "../../shared/services/test.service";
import {Filials} from "../../shared/interfaces/filials.interfaces";
import {FormBuilder} from "@angular/forms";
import {SelectedAvto} from "../../shared/interfaces/avto.interfaces";

@Component({
  selector: 'app-contract-block',
  templateUrl: './contract-block.component.html',
  styleUrls: ['./contract-block.component.scss']
})


export class ContractBlockComponent implements OnInit {

  filialDilersSHow = false;

  activeClass = true;

  filialGroups: any[] = [];
  filialDilers: any[] = [];
  mainAvtoImg: any[] = [];
  uzauto: Filials[] = [];
  uzAutoModels: any[] = [];
  selectedAvto: any;
  filialId: any;
  idC: number = -1;
  id: number = -1;

  cars = [

    {
      model_id: 28,
      name: "NEXIA-3",
      colorName: "nexia3White",
      img: "../../../assets/img/nexia3White.jpg",
      colors: [
        {
          hex_value: "red",
          model_id: 76,
          name: "NEXIA-3",
          colorName: "nexia3 Red",
          img: "../../../assets/img/nexia3red.jpg",
        },
        {
          hex_value: "yellow",
          model_id: 68,
          name: "NEXIA-3",
          colorName: "nexia3 Yellow",
          img: "../../../assets/img/nexia3yellow.jpg",
        },
        {
          hex_value: "brown",
          model_id: 76,
          name: "NEXIA-3",
          colorName: "nexia3 Mokriy",
          img: "../../../assets/img/nexia3Mokriy.jpg",
        },
        {
          hex_value: "blue",
          model_id: 60,
          name: "NEXIA-3",
          colorName: "nexia3Blue",
          img: "../../../assets/img/nexia3blue.jpg",
        },
      ],
      modifications: [ // модификации, обязательный список
        {
          modification_id: "314", // идентификатор модификации, обязательное поле
          name: "D11 (Дамас Ван (грузовой))", // название модификации, обязательное поле
          price: "75928000", // цена, обязательное поле
          producing: "Y", // производится (Y - да, N - нет), обязательное поле
          fuel_consumption: "7,8 л/100 км", // расход топлива
          horsepower: "38 л.с. при 5000 об/мин", // лошадиные силы
          acceleration: "41.0", // ускорение
          transmission: "5 МT", // коробка передач
          descriptions: "", // описание
          options: [ // включенные опции
            ""
          ],
          color_margins: ["121", "5000000"], // наценка к цвету (формат: [идентификатор цвета 1, наценка 1, идентификатор цвета 2, наценка 2, ...]), обязательное поле, может быть пустым

        }],
      min_price: "75928000"
    },

    {
      model_id: 29,
      name: "NEXIA-3",
      colorName: "nexia3White",
      img: "../../../assets/img/tahoe1.jpg",
      colors: [
        {
          hex_value: "red",
          model_id: 76,
          name: "NEXIA-3",
          colorName: "nexia3 Red",
          img: "../../../assets/img/tahoe2.jpg",
        },
        {
          hex_value: "yellow",
          model_id: 68,
          name: "NEXIA-3",
          colorName: "nexia3 Yellow",
          img: "../../../assets/img/tahoe3.jpg",
        },
        {
          hex_value: "brown",
          model_id: 76,
          name: "NEXIA-3",
          colorName: "nexia3 Mokriy",
          img: "../../../assets/img/nexia3Mokriy.jpg",
        },
        {
          hex_value: "blue",
          model_id: 60,
          name: "NEXIA-3",
          colorName: "nexia3Blue",
          img: "../../../assets/img/nexia3blue.jpg",
        },
      ],
      modifications: [ // модификации, обязательный список
        {
          modification_id: "314", // идентификатор модификации, обязательное поле
          name: "D11 (Дамас Ван (грузовой))", // название модификации, обязательное поле
          price: "75928000", // цена, обязательное поле
          producing: "Y", // производится (Y - да, N - нет), обязательное поле
          fuel_consumption: "7,8 л/100 км", // расход топлива
          horsepower: "38 л.с. при 5000 об/мин", // лошадиные силы
          acceleration: "41.0", // ускорение
          transmission: "5 МT", // коробка передач
          descriptions: "", // описание
          options: [ // включенные опции
            ""
          ],
          color_margins: ["121", "5000000"], // наценка к цвету (формат: [идентификатор цвета 1, наценка 1, идентификатор цвета 2, наценка 2, ...]), обязательное поле, может быть пустым

        }],
      min_price: "75928000"
    },
  ]


  constructor(
    private allService: AllService,
    private testService: TestService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
  }

  uzAutoForm = this.fb.group({
    models: []
  })


  ngOnInit(): void {

    this.getBrends()
    this.cars.forEach((c)=>{
      const avto ={
        img: c.img,
        model_id: c.model_id

    }
     this.mainAvtoImg.push(avto)

      console.log(this.mainAvtoImg, 'imgg21');
      console.log(c.img, 'imgg1')
    })
    console.log(this.mainAvtoImg, 'imgg2')
  }

  // onChange(value:any) {
  //   console.log(value.target.value);
  //   // console.log(value)
  //
  //   const item = value.target.value;
  //   const filial =  this.filialGroups.filter((f)=> {
  //     if(f.name == item){
  //       this.filialId = f.filial_id
  //     }
  //   });
  //
  //   console.log(  this.filialId, 'filId')
  // }


  dilerClicked(event: any) {

    console.log(event, 'ev')
    console.log(this.filialGroups, 'filialsss')
    this.filialGroups.forEach((f) => {
      if (f.region_id == event) {
        this.filialDilers = f.dealers;
        this.filialDilersSHow = true
      }
    })
    console.log(this.filialDilers, 'dilll')
    console.log(this.filialDilersSHow, 'show')

  }


  selectedColor(selected: SelectedAvto, i: any) {
    this.id = i
    this.idC = this.cars.findIndex(ind=>{
    return   ind.model_id ==  selected.model_id
    })
    this.selectedAvto = selected
    this.activeClass = false;
    this.cars.filter((c)=>{
      if( c.model_id === selected.model_id){
        // @ts-ignore
        c.img = selected.colors[i].img

      }
    })
    console.log(selected.colors[i], 'colorsss');
    console.log(this.idC, 'idc', i)

  }


  mainImg(selected: SelectedAvto, i: any) {

      this.mainAvtoImg.filter(m=>{
        if(m.model_id === selected.model_id){
          this.cars[i].img = m.img;
          this.activeClass = true;
        }

    })

    console.log(this.mainAvtoImg, 'imgg')
  }


  getBrends() {
    this.testService.getBrend().subscribe((res) => {
      console.log(res, 'res')
      this.uzauto = res[0].filial_id;
      this.cd.detectChanges();
      this.postsave()
    })
  }


  postsave() {
    const data = {
      filial_id: this.uzauto
    }


    this.testService.postModel(data).subscribe((res) => {
      console.log(res, 'model')
      this.uzAutoModels = res
    })

    this.testService.postDealers(data).subscribe((res) => {
      console.log(res, 'diler')
      this.filialGroups = res
    })

  }


}
