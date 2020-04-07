import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { carousel } from '../model/carousel.model';
import { CarouselService } from '../Service/carousel.service';
import { CarouselInsert } from '../Model/Carouselinsert.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
myForm:FormGroup
showdata:number;
appData:carousel;
carouseldata:carousel;
carousel:CarouselInsert;
test:string;
details:any;
submitted:boolean = false;
result:boolean;
variable:string;

  constructor(private carouselService:CarouselService,private myroutes:Router) {
    this.carousel = new CarouselInsert();
    this.carouselService.getCarouselDataFromApI().subscribe((data:any)=>{
      this.appData = data;
      console.log(this.appData)
    })
   


    


   }
   public get carouselData()
   {
     return this.myForm.get("carouselData");
   }
   public get validForm()
   {
     return this.myForm.get("validForm");
   }
      public get to()
   {
     return this.myForm.get("to");
   }
   public get applicationName()
   {
     return this.myForm.get("applicationName");
   }
   public get user()
   {
     return this.myForm.get("user");
   }
   selectApplicationName(event:any) {
     this.carousel.ApplicationName = event.target.value;
     console.log(this.carousel.ApplicationName);
  }
    selectUser(event:any) {
      this.carousel.UserName = event.target.value;
      console.log(this.carousel.UserName);
      // console.log(e.target.value)
      // this.user.setValue(e.target.value, {
      //   onlySelf: true
      // })
    }
      fromDate(event:any) {
        this.carousel.ValidFrom = event.target.value;
        console.log(this.carousel.ValidFrom);  
        // console.log(e.target.value)
        // this.validForm.setValue(e.target.value, {
        //   onlySelf: true
        // })
      }
        toDate(event:any) {
          this.carousel.ValidTo = event.target.value;
          console.log(this.carousel.ValidTo);
    
          // console.log(e.target.value)
          // this.to.setValue(e.target.value, {
          //   onlySelf: true
          // })
        }
          save()
          {
            this.carousel.CarouselData = this.myForm.get("carouselData").value;
            console.log(this.carousel.CarouselData);
            this.submitted = true;
            if(this.myForm.valid)
            {
              // this.carouseldata.ApplicationName = this.myForm.get("applicationName").value;
              // this.carouseldata.UserName = this.myForm.get("user").value;
              // this.carouseldata.CarouselData = this.myForm.get("carouselData").value;
              // this.carouseldata.ValidFrom = this.myForm.get("validForm").value;
              // this.carouseldata.ValidTo = this.myForm.get("to").value;
              this.showdata=1;
               this.carouselService.Insert(this.carousel).subscribe((data:any)=>{
                 this.details = data;
                //  console.log(this.details);
                if(this.result=true)
                {
                   this.variable="Successfully Inserted";
                }
               })
             
            }
          }
  ngOnInit() {
    this.myForm = new FormGroup({
      carouselData:new FormControl(null,Validators.compose([Validators.required])),
      validForm:new FormControl(null,Validators.compose([Validators.required])),
      to:new FormControl(null,Validators.compose([Validators.required])),
      applicationName:new FormControl(null,Validators.compose([Validators.required])),
      user:new FormControl(null,Validators.compose([Validators.required]))
    })
  }

  Update(getdata:carousel)
  {
    this.myroutes.navigate(["update",{data:JSON.stringify(getdata)}],{skipLocationChange:true});

    // this.myroutes.navigateByUrl('update');
  }


  Delete()
  {
    this.myroutes.navigateByUrl('delete');
  }
}
