import { Component, OnInit } from '@angular/core';
import { UserRanking } from 'src/app/user/user-service/UserRanking';
import { UserUtilsService } from 'src/app/user/user-service/userUtils.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  users: UserRanking[] = [];
  order: string = 'pontos';

  constructor(private userRankingService: UserUtilsService) {}

  ngOnInit(): void {
    this.userRankingService
      .findAllUsersForRanking()
      .subscribe((user: UserRanking[]) =>
        user.forEach((u) => this.users.push(u))
      );
  }
}
