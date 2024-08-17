import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segments: string = 'usuarios';

  usuarios = [
    {
      nome: 'Leôncio',
      idade: 20,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'Segunda-Feira',
          treinos: [
            "Rosca Direta",
            "Crucifixo",
            "Remada Sumô",
            "Bolinha de Golfe"
          ]
        },
        {
          dia: 'Quarta-Feira',
          treinos: [
            "Rosca Invertida",
            "Pulley",
            "Remada Sentada"
          ]
        },
        {
          dia: 'Sexta-Feira',
          treinos: [
            "Supino Inclinado",
            "Bíceps Corda",
            "Bíceps Hulk Invertido"
          ]
        }
      ]
    },
    {
      nome: 'Max-Steel',
      idade: 28,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'Terça-Feira',
          treinos: [
            "Modo Turbo",
            "Mil Vezes Mais",
            "FORTE"
          ]
        },
        {
          dia: 'Quinta-Feira',
          treinos: [
            "Supi... Alpino",
            "Peso de 200kg",
            "Remada no Bote"
          ]
        },
        {
          dia: 'Sábado',
          treinos: [
            "Pular o Leg-Day",
            "1000 Pulos de Corda",
            "200 Voltas no Quarteirão"
          ]
        }
      ]
    }
  ]

  trocar(event: any) {
    this.segments = event.detail.value;
  }

}
