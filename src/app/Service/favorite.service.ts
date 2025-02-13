import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favoriteItemList : any =[]
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.favoriteItemList.push(...product);
    this.productList.next(product);
  }
  addtofavorite(product : any){
    this.favoriteItemList.push(product);
    this.productList.next(this.favoriteItemList);
    localStorage.setItem('myData', product)
    this.getTotalPrice();
    console.log(this.favoriteItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.favoriteItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removefavoriteItem(product: any){
    this.favoriteItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.favoriteItemList.splice(index,1);
      }
    })
    this.productList.next(this.favoriteItemList);
  }
  removeAllfavorite(){
    this.favoriteItemList = []
    this.productList.next(this.favoriteItemList);
  }
}
