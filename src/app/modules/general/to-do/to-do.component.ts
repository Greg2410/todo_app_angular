import { Component, OnInit } from '@angular/core';
import { TaskServiceService, Task } from 'src/app/task-service.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  public todo: Task[];
  public inputData: any;

  constructor(private service: TaskServiceService) {
    this.todo = service.getAll();
   }

  ngOnInit(){}

  add(){
    this.todo.push(new Task(this.inputData));
  }

  delete(index: number){
    this.todo.splice(index, 1);
  }

}
