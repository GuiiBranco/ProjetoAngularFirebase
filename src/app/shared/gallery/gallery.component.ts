import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  implements OnInit {

  constructor() { }

  imagens = [
    {
      titulo: 'Braço',
      fotos: [
        './assets/img/alpino.jpg',
        "./assets/img/pesodehand.jpg"
      ]
    },
    {
      titulo: 'Pernas',
      fotos: [
        './assets/img/vamopula.jpg',
        "./assets/img/esrrida.jpg"
      ]
    },
    {
      titulo: 'Costas',
      fotos: [
        './assets/img/crusfixo.jpg',
        "./assets/img/forcacaodebarra.png"
      ]
    },
    {
      titulo: 'Peito',
      fotos: [
        './assets/img/rolocompressor.jfif',
        "./assets/img/roscakk.jpg"
      ]
    }
  ]

  ngOnInit() {}

}
