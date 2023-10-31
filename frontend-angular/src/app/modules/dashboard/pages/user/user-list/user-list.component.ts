import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/modules/interfaces/user.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class UserListComponent {

  displayedColumns: string[] = ['Registro', 'RUT', 'Nombre', 'Email'];
  dataUsers: User[];

  dataSource = new MatTableDataSource([]);

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(){
    this.userService.getUsers().subscribe( (users) => {
      console.log({users});
      this.dataSource = new MatTableDataSource(users); 
      
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
