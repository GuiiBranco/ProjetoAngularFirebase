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
  pessoa = {
    foto: "https://i.pinimg.com/originals/50/5d/5f/505d5f99390a5ad7b1faebd8b10d44b2.jpg",
    nome: "Juliano do Pastel",
    objetivo: "Programador HTML & CSS",
    contato: {
      email: "Ronaldinho90@rocketmail.com",
      telefone: "(15) 40028922",
      github: "github.com/futebas",
      linkedin: "linkedin.com/pelé"
    },
    softskills: [
      "Comunicação",
      "Proatividade",
      "Trabalho em Grupo",
      "Resiliência",
      "Liderança",
      "Criatividade",
      "Jogador Profissional de Gamão"
    ],
    formacao: [
      {
        ano_inicio: '2023',
        ano_termino: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_termino: '2028',
        instituicao: 'Faculdade de Técnologia de Tatuí',
        curso: 'Análise e Desenvolvimento de Sistemas'
      }
    ]
  }
  constructor(){ }
}
