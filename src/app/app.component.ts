import { AppService } from './app.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { DatePipe } from '@angular/common';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit{
  @ViewChild('todoTask') todoTask: any;
  task ='';
  todos: Todo[] = [];
  
  constructor(private AppService: AppService) {

  }


  // onSort() {
  onSort(event: any): void {
    // Apply sorting logic based on the event

    this.AppService.getTodoList().subscribe(
    response => {
      console.log (response);
    })
    // const sortedData = data.todos.sort((a, b) => new Date(a.date) - new Date(b.date){
    //   const value1 = a[event.field];
    //   const value2 = b[event.field];
    //   return (event.order === 1 ? 1 : -1) * (value1 > value2 ? 1 : -1);
    // });
  
    // this.data = sortedData;
  }
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.AppService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }
  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.AppService.updateTodo({...todo, completed: e.checked}).subscribe( // only change 'completed'. '...': all other data keep the same
      response => {
        console.log (response);
      }
    )
  }

  // updateTodo(e: any, todo: Todo) {
  //   this.AppService.updateTodo({...todo, completed: e.checked}).subscribe( // only change 'completed'. '...': all other data keep the same
  //     response => {
  //       console.log (response);
  //     }
  //   )
  // }
  deleteTodo(e: unknown, id: Todo['id']) {
    this.AppService.deleteTodo(id).subscribe(
      response => {
        this.getList(); // Refresh the list
      }
    )
  }
  addTodo() { 
    let newDate = new Date();
    this.AppService.addTodo({ 
      task: this.task, 
      completed: false,
      date: newDate
      
    }).subscribe(
      response => {
        this.todoTask.reset(); // Clear the validation
        this.getList(); 
      }
    )
  }
}