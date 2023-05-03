import { Component, OnInit } from '@angular/core';

//Crear una interfaz
interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title= 'Mi primer app en angular';
  public ArregloTarjeta : Tarjeta []= []; //variable de tipo arreglo

  ngOnInit(): void { // Es un metodo de tipo void que se inicializa cuando se ejecuta la pagina
    this.ArregloTarjeta= [ // cargamos datos al arreglo
      {titulo: 'Video 1', subtitulo: 'Subtitulo de video', image: "/assets/Playera Adidas Hombre.jpg"},
      {titulo: 'Video 2', subtitulo: 'Subtitulo de video', image: "/assets/Playera Azul.png"},
      {titulo: 'Video 3', subtitulo: 'Subtitulo de video', image: "/assets/Playera Colorida.png"},
      {titulo: 'Video 4', subtitulo: 'Subtitulo de video', image: "/assets/Playera Blanca.jpg"},
      {titulo: 'Video 5', subtitulo: 'Subtitulo de video', image: "/assets/Playera Logo Azul.png"},
      
    ]
  }


}