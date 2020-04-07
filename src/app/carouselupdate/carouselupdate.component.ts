// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

// import { CarouselService } from '../Service/carousel.service';
// import { carousel } from '../model/carousel.model';
// import { CarouselInsert } from '../Model/Carouselinsert.model';
// import { ActivatedRoute, Route, Routes, } from '@angular/router';

// @Component({
//   selector: 'app-carouselupdate',
//   templateUrl: './carouselupdate.component.html',
//   styleUrls: ['./carouselupdate.component.css']
// })

// // this.route.navigate(["home/insert",{data:JSON.stringify(this.studDb)}],{skipLocationChange:true});
    





// // import { ActivatedRoute, Route, Routes, Router } from '@angular/router';
// export class CarouselupdateComponent implements OnInit {
// result:boolean;
// var:carousel;
// variable:string;
// myForm:FormGroup;
// carousel:carousel;
// appData:CarouselInsert;
// submitted:boolean = false;
// showdata:number;
// details:any;
// Carousel:CarouselInsert;

//   constructor(private carouselService:CarouselService,private myroutes:Router,private myActivateRoute:ActivatedRoute) { 
   

//     this.carousel=new carousel();
//     if(myActivateRoute.snapshot.paramMap.get('data')){

//       this.carousel=JSON.parse(myActivateRoute.snapshot.paramMap.get('data'));
//       console.log(this.carousel)
//       // this.myForm.get("validForm").setValue(this.carousel.ValidFrom)
//   }
//     this.carouselService.getCarouselDataFromApI().subscribe((data:any)=>{
//       this.appData = data;
//       console.log(this.appData)
//     })
//   }

  
//   update()
//   {

//     this.submitted=true;
//     if(this.myForm.valid)
//     {
//     this.carousel.CarouselId=this.myForm.get("carouselId").value;
//     this.carousel.CarouselData=this.myForm.get("carouselData").value;

//     this.carouselService.update(this.carousel.CarouselId,this.carousel).subscribe((data:boolean)=>{
//       this.result=data;
//       if(this.result=true)
//       {
//         this.variable="Successfully Updated";
//       }
//     })
//     }
    
//   }
//   back(){
//     this.myroutes.navigateByUrl('carousel');
//   }

//   public get carouselId()
//   {
//     return this.myForm.get("carouselId");
//   }

//   public get carouselData()
//   {
//     return this.myForm.get("carouselData");
//   }
//   public get validForm()
//   {
//     return this.myForm.get("validForm");
//   }
//      public get to()
//   {
//     return this.myForm.get("to");
//   }
//   public get applicationName()
//   {
//     return this.myForm.get("applicationName");
//   }
//   public get user()
//   {
//     return this.myForm.get("user");
//   }
//   selectApplicationName(event:any) {
//     this.carousel.ApplicationName = event.target.value;
//     console.log(this.carousel.ApplicationName);
//  }
//    selectUser(event:any) {
//      this.carousel.UserName = event.target.value;
//      console.log(this.carousel.UserName);
//      // console.log(e.target.value)
//      // this.user.setValue(e.target.value, {
//      //   onlySelf: true
//      // })
//    }
//      fromDate(event:any) {
//        this.carousel.ValidFrom = event.target.value;
//        console.log(this.carousel.ValidFrom);  
//        // console.log(e.target.value)
//        // this.validForm.setValue(e.target.value, {
//        //   onlySelf: true
//        // })
//      }
//        toDate(event:any) {
//          this.carousel.ValidTo = event.target.value;
//          console.log(this.carousel.ValidTo);
   
//          // console.log(e.target.value)
//          // this.to.setValue(e.target.value, {
//          //   onlySelf: true
//          // })
//        }
      
         
//  ngOnInit() {
//    this.myForm = new FormGroup({
//      carouselId:new FormControl(null,Validators.compose([Validators.required])),
//      carouselData:new FormControl(null,Validators.compose([Validators.required])),
//      validForm:new FormControl(null,Validators.compose([Validators.required])),
//      to:new FormControl(null,Validators.compose([Validators.required])),
//      applicationName:new FormControl(null,Validators.compose([Validators.required])),
//      user:new FormControl(null,Validators.compose([Validators.required]))
//    })
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import { CarouselService } from '../Service/carousel.service';
import { carousel } from '../model/carousel.model';
import { CarouselInsert } from '../Model/Carouselinsert.model';
import { ActivatedRoute, Route, Routes, } from '@angular/router';

@Component({
  selector: 'app-carouselupdate',
  templateUrl: './carouselupdate.component.html',
  styleUrls: ['./carouselupdate.component.css']
})
export class CarouselupdateComponent implements OnInit {
result:boolean;
var:carousel;
variable:string;
myForm:FormGroup;
carousel:carousel;
appData:CarouselInsert;
submitted:boolean = false;
showdata:number;
details:any;
Carousel:CarouselInsert;

  constructor(private carouselService:CarouselService,private myroutes:Router,private myActivateRoute:ActivatedRoute) { 
   

    this.carousel=new carousel();
    if(myActivateRoute.snapshot.paramMap.get('data')){
      this.carousel=JSON.parse(myActivateRoute.snapshot.paramMap.get('data'));
      console.log(this.carousel)
      // this.myForm.get("validForm").setValue(this.carousel.ValidFrom)
  }
    this.carouselService.getCarouselDataFromApI().subscribe((data:any)=>{
      this.appData = data;
      console.log(this.appData)
    })
  }

  
  update()
  {

    this.submitted=true;
    if(this.myForm.valid)
    {
    this.carousel.CarouselId=this.myForm.get("carouselId").value;
    this.carousel.CarouselData=this.myForm.get("carouselData").value;

    this.carouselService.update(this.carousel.CarouselId,this.carousel).subscribe((data:boolean)=>{
      this.result=data;
      if(this.result=true)
      {
        this.variable="Successfully Updated";
      }
    })
    }
    
  }
  back(){
    this.myroutes.navigateByUrl('carousel');
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
      
         
 ngOnInit() {
  }
}

