import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftDeleteService } from '../service/softdelete.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarouselService } from '../Service/carousel.service';
import { carousel } from '../model/carousel.model';

@Component({
  selector: 'app-softdelete',
  templateUrl: './softdelete.component.html',
  styleUrls: ['./softdelete.component.css']
})
export class SoftdeleteComponent implements OnInit {
result:boolean;
myform:FormGroup;
carousel:any;
variable:string;
  constructor(private myroutes:Router,private Softdeleteservice:SoftDeleteService) { }


  back(){
    this.myroutes.navigateByUrl('carousel');
  }

  delete(){
   this.carousel=this.myform.get("CarouselId").value;
    this.Softdeleteservice.SoftDelete(this.carousel).subscribe ((data:boolean)=>{
      this.result=data;
      if(this.result=true)
      {
        this.variable="Successfully Deleted";
      }
    })
  }


  


  public get CarouselId(){
    return this.myform.get("CarouselId");
  }
  

  ngOnInit() {

    this.myform=new FormGroup({
    CarouselId:new FormControl(null,Validators.compose([Validators.required]))
    })

  }

}
