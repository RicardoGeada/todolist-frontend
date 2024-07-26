import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent {
  todos : any = [];
  error = '';
  

  constructor(private http: HttpClient) {};

  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch(e) {
      console.error(e);
      this.error = 'Loading failed.'
    }
    
  }

  loadTodos() {
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.get(url));
  }
}
