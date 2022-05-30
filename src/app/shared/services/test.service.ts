import {Injectable} from "@angular/core";
import {DEVELOPMENT_IP} from "../constants/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TestService {
  constructor(private http: HttpClient) {}

  login(body: any){
   return  this.http.post<any>(DEVELOPMENT_IP + 'auth/login', body)
  }

  // Бренды
  getBrend(){
    return this.http.get<any>(DEVELOPMENT_IP + 'uz-avto-savdo/get-branches')
  }

  //Модели
  postModel(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'uz-avto-savdo/get-models', body)
  }

  //Очередь
  postQueue(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'ph:model_stock_queues', body)
  }

  //Дилеры
  postDealers(body: any){
    return this.http.post<any>(DEVELOPMENT_IP + 'uz-avto-savdo/get-dealers', body)
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
