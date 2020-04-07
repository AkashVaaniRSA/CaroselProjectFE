export class carousel
{
    CarouselId:number;
    ApplicationName:string;
    UserName:string;
    CarouselData:string;
    ValidFrom:string;
    ValidTo:string;
    


constructor(carouselId?,applicationname?,username?,carouseldata?,validfrom?,validto?)
{
  this.CarouselId=carouselId;
  this.ApplicationName=applicationname;
  this.UserName=username;
  this.CarouselData=carouseldata;
  this.ValidFrom=validfrom;
  this.ValidTo=validto;
}
}