import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { NotificationService } from 'src/app/notification/notification.service';
import { UserService } from 'src/app/user/user-service/user.service';
import { UserUtilsService } from 'src/app/user/user-service/userUtils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;
  users: User[] = [];
  constructor(
    private userUtilService: UserUtilsService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {
    this.users$ = this.userUtilService.findAllUsers(
      this.userService.getToken()!
    );
    this.users$.subscribe((users: User[]) => (this.users = users));
  }

  ngOnInit(): void {}

  atualizaRole(userId: number) {
    this.userUtilService
      .setNewRole(userId, this.userService.getToken()!)
      .subscribe((response) =>
        this.notificationService.success(
          'SUCESSO',
          'Permissão concedida com sucesso!'
        )
      );
  }

  removeAdmin(userId: number) {
    this.userUtilService
      .removeRole(userId, this.userService.getToken()!)
      .subscribe((response) =>
        this.notificationService.success(
          'SUCESSO',
          'Permissão removida com sucesso!'
        )
      );
  }
}
