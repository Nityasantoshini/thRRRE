import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-waste',
  templateUrl: './donate-waste.component.html',
  styleUrls: ['./donate-waste.component.css']
})
export class DonateWasteComponent implements OnInit {
  products:any;
  constructor() {
    this.products = [
      {id: 1, name:'Brick 2.0', imagePath: "brick.jpeg", website:"https://sites.google.com/view/brick2/home", brief:"Dr. Binish Desai is India's Recycle Man. He has been able to convert 100 different types of waste into more than 193 different products.With the help of waste from paper industries and his patented binder, Dr. Binish has used shredded PPE waste to make an eco brick. One eco brick is made up of 52% shredded Covid PPE waste. This is waste that could have gone to the landfill but is now being used productively. Brick 2.0 is light and 4 times tougher than a regular brick! And these bricks cost only Rs. 2.8 per brick!",email:" ppe2brick@gmail.com", phone:"+91 9099030117", Address:"Dr.Binish Desai 12-A Girdhar chambers , Kacheri road , Valsad -396001"},
      {id: 2, name:"Lorem Ipsum", imagePath: "earth.jpg", website: "#",brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",email:"", phone:"", Address:"" },
      {id: 3, name:"Lorem Ipsum",imagePath: "earth.jpg", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",email:"", phone:"", Address:""},
      {id: 4, name:"Lorem Ipsum", imagePath: "earth.jpg", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",email:"", phone:"", Address:""},
      {id: 5, name:"Lorem Ipsum",imagePath: "earth.jpg", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",email:"", phone:"", Address:""},
      {id: 6, name:"Lorem Ipsum",imagePath: "earth.jpg", website: "#", brief:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",email:"", phone:"", Address:""}
    ];
}

  ngOnInit(): void {
  }

}
