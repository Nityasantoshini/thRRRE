import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-waste',
  templateUrl: './sell-waste.component.html',
  styleUrls: ['./sell-waste.component.css']
})
export class SellWasteComponent implements OnInit {
  products:any;
  constructor() { 
    this.products = [
      {id: 1, name:'Clothes', imagePath: "waste-cloths.jpg", website:"#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"buyers email",buyerinfo:"XYZ organization",form:"",return:"Food based on weight"},
      {id: 2, name:"Books/Papers", imagePath: "paper-waste.jfif", website: "#",brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"",buyerinfo:"XYZ organization",form:"",return:"Money based on weight"},
      {id: 3, name:"Wood",imagePath: "wood.jfif", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"",buyerinfo:"XYZ organization",form:"",return:"......"},
      {id: 4, name:"fruits/vegetable waste", imagePath: "vegwaste.jfif", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"",buyerinfo:"XYZ organization",form:"",return:"....."},
      {id: 5, name:"Flowers",imagePath: "flower.jpg", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"",buyerinfo:"XYZ organization",form:"",return:"......"},
      {id: 6, name:"Plastic products",imagePath: "PLASTIC.jfif", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contact:"",buyerinfo:"XYZ organization",form:"",return:"......."}
    ];
  }

  ngOnInit(): void {
  }

}
