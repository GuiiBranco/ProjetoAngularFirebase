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
  perfil = {
    foto: '',
    nome: '',
    profissao: '',
    email: '',
    idioma: '',
    cidade_estado: '',
    bio: '',
    metrica: []
  }
  
  amigo = {
    foto: '',
    nome: '',
    mencao: '',
    msg: ''
  }
}
