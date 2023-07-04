import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogoComponent, {
      data: {
        tipo: 'CANCELAMENTO',
        idSecretario: 7,
        idReserva: 19
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      //ATUALIZA A OCORRENCIA NAS RESERVAS FEITAS
      //ATUALIZA A OCORRENCIA NAS RESERVAS ATIVAS
    });
  }
}
