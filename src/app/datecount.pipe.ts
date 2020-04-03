import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todayShort:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    //one day has 60 sec * 60mins *24
    var daySeconds:number = 60*60*24;
    //day difference->milliseconds...*0.001->seconds
    let dayDifference:any = Math.abs(todayShort - value)*0.001;
    let daysGone:number = dayDifference/daySeconds;
    if(daysGone <=0){
      return "today";
    }else{
      return daysGone+ " days ago";
    }
  }

}
