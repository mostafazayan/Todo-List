import { Component, OnInit } from '@angular/core';
import { TaskRequestModel } from 'src/app/models/tasks-request-model';
import { TasksService } from 'src/app/services/tasks.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {
  task: TaskRequestModel = {
    id: 0,
    title: '',
    desc: ''
  };

  onClose: any;

  constructor(
    public bsModalRef: BsModalRef,
    private taskService: TasksService
  ) {}
  onAddTask() {
    const confirmAdd = confirm('Add Task?');
    if (confirmAdd) {
      this.taskService.addTask(this.task).subscribe(
        taskAdded => {
          console.log(taskAdded);
          this.onClose(taskAdded);
          this.bsModalRef.hide();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  onEditTask() {
    const confirmEdit = confirm('Edit Task?');
    if (confirmEdit) {
      this.taskService.editTask(this.task).subscribe(
        taskUpdated => {
          console.log(taskUpdated);
          this.onClose(taskUpdated);
          this.bsModalRef.hide();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  ngOnInit() {}
}
