import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaderResponse } from '@angular/common/http';
import{ carousel} from "../model/carousel.model";
import { CarouselInsert } from '../Model/Carouselinsert.model';



@Injectable()
export class SoftDeleteService{
 
    Carouselpage:any;
    constructor(private myHttp:HttpClient){
        this.Carouselpage=[];
    }

SoftDelete(CarouselId:carousel)
{
   // this.dummy = "johnson";
   console.log('in service',CarouselId);
   return this.myHttp.get("https://localhost:44316/api/SoftDelete?carouselId="+CarouselId);

 
 
}
}