import { Component, OnInit } from '@angular/core';
import { Log } from './Log';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Log[] = [];

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService
      .getAllLogs()
      .subscribe((logs: Log[]) => (this.logs = logs));
  }
}
