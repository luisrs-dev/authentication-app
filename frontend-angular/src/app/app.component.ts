import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ripley';

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(){
    this.authService.autoAuthUser();
  }

}
