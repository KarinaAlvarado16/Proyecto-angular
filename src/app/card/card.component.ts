import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image: string = "./assets/Adidas Shoes.png" ;
  public titulo: string = "Curso de angular con interpelación"
  @Input () dataEntrante: any;

  constructor () {}

  ngOnInit(): void {
    
  }

}
