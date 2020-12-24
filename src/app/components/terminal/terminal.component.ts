import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  command: string = '';
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
  }
  runCommand() {
    if(this.command) {
      this.httpClient.post('http://127.0.0.1:5000', {command: this.command}).subscribe(res => {
        console.log(res)
        this.command = '';
      });
    }
  }
}
