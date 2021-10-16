import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.component.html',
  styleUrls: ['./rrr.component.css']
})
export class RRRComponent implements OnInit {
  products:any;
  constructor() {
    this.products = [
      {imagePath: "Reuse1.jpg", video:"https://www.cubesmart.com/blog/your-home/diy-projects/20-creative-ideas-for-repurposed-plastic-containers/",caption:"Simple Recycle Reuse and reduce ideas useful in gardening or decorating"},
      {imagePath:"Reuse2.jpg", video: "",caption:""},
      {imagePath:"Reuse3.jfif",video: "",caption:"Cool decoarations using bulbs"},
      {imagePath: "Reuse4.jpg", video: "",caption:"Storage ideas using cardbox"},
      {imagePath:"Reuse5.jpg", video: "",caption:"Easy Water sprinklers from plasic bottles"},
      {imagePath: "Reuse6.jpg", video: "",caption:"Jewellery organizer using plastic bottles"}
    ];
   }

  ngOnInit(): void {
  }

}
