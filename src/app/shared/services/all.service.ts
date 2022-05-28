import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DEVELOPMENT_IP} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  // Бренды
  getBrend(){
    return this.http.get<any>(DEVELOPMENT_IP + 'ph:filials')
  }

  //Модели
  postModel(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'ph:models', body)
  }

  //Очередь
  postQueue(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'ph:model_stock_queues', body)
  }

  //Дилеры
  postDealers(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'ph:dealers', body)
  }

  //Остатки
  postDealerStocks(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'ph:dealer_stocks', body)
  }

  //Создание договора
  postOrderSave(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'order:order_save', body)
  }

  //Просмотр заказа
  postOrderInfos(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'order:get_order_infos', body)
  }

}
