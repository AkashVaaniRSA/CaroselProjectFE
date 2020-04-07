import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaderResponse } from '@angular/common/http';
import{ carousel} from "../model/carousel.model";
import { Observable } from 'rxjs';
import { CarouselInsert } from '../Model/Carouselinsert.model';

@Injectable()
export class CarouselService{

    Carouselpage:any;
    constructor(private myHttp:HttpClient){
        this.Carouselpage=[];

}
getCarouselDataFromApI(){
    return this.myHttp.get("https://localhost:44316/api/values");

} 
Insert(Carouseldata:CarouselInsert){
return this.myHttp.post("https://localhost:44316/api/values",Carouseldata)

}


update(carouselId:any,Carouselpage:carousel)
{

// this.dummy = "johnson";
console.log('in service',carouselId);
return this.myHttp.put("https://localhost:44316/api/Values?carouselId="+carouselId,Carouselpage)


}
}
