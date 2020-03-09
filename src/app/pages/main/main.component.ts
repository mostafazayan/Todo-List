import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private tasksService: TasksService,
    private modalService: BsModalService
  ) {}

  tasks: any = [];

  ngOnInit() {
    this.onGetAllTasks();
  }
  onGetAllTasks() {
    this.tasksService.getTasks().subscribe(allTasks => {
      this.tasks = allTasks;
      console.log(this.tasks);
    });
  }
  onAddTask() {
    this.bsModalRef = this.modalService.show(AddEditTaskComponent);
    this.bsModalRef.content.onClose = added => {
      if (added) {
        this.onGetAllTasks();
      }
    };
  }
  onEditTask(task) {
    console.log(task);
    this.bsModalRef = this.modalService.show(AddEditTaskComponent, {
      initialState: { task }
    });
    this.bsModalRef.content.onClose = updated => {
      if (updated) {
        this.onGetAllTasks();
      }
    };
    console.log('Edit Clicked');
  }
  onDeleteTask(taskId) {
    const confirmDelete = confirm('Delete task function');

    if (confirmDelete) {
      this.tasksService.deleteTask(taskId).subscribe(
        deleted => {
          this.onGetAllTasks();
        },
        err => console.log(err)
      );
    } else {
      console.log('canceled');
    }
  }
}
