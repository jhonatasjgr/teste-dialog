import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ocorrencia!: string
  tipo = this.data.tipo
  idSec = this.data.idSecretario
  idRes = this.data.idReserva

  postOcorrencia() {

  }


}
