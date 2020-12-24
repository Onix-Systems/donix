import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
enum StatusEnum {
  start = 'start',
  stop = 'stop',
  pause = 'pause',
  unpause = 'unpause',
}

const statusColors = {
  running: 'success',
  exited: 'danger',
  created: 'primary',
  paused: 'warning'
}

@Component({
  selector: 'app-docker-card',
  templateUrl: './docker-card.component.html',
  styleUrls: ['./docker-card.component.scss']
})
export class DockerCardComponent implements OnInit {
  containers: any = [];
  statusEnum = StatusEnum;
  statusColors = statusColors;
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.getContainers();
  }

  send(id: string, status: StatusEnum) {
    this.httpClient.put(`http://127.0.0.1:5000/${id}`, {status}).subscribe((res: StatusEnum) => {
     this.getContainers();
    })
  }

  getContainers() {
    this.httpClient.get(`http://127.0.0.1:5000/`).subscribe(res => {
      this.containers = res;
      console.log(res)
    })
  }
}
