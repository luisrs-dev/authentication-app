import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from 'src/app/core/auth/auth.service';

export interface Session {
  _id: string;
  date: string;
  type: string;
  rut: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-sessions',
  styleUrls: ['session.component.css'],
  templateUrl: 'session.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class SessionComponent {
  displayedColumns: string[] = ['Fecha', 'Detalle', 'RUT', 'Contraseña'];

  dataSource = new MatTableDataSource<Session>();

  constructor(
    private authService: AuthService
  ) {}


  ngOnInit(){
    this.authService.getSessions()
      .subscribe( sessions => {

        const dataSessions: Session[] = sessions.map( (session: Session) => ({...session, createdAt: new Date(session.createdAt).toLocaleString('en-GB', {hour12: false})
        }))
        console.log(dataSessions);
        this.dataSource = new MatTableDataSource(dataSessions);
        
    },
    error => {
      console.log(error);
      
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
