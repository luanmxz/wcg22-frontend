import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/user/user-service/user.service';
import { UserUtilsService } from 'src/app/user/user-service/userUtils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userUtilService: UserUtilsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userUtilService
      .findAllUsers(this.userService.getToken()!)
      .subscribe((users: User[]) => (this.users = users));
  }
}
