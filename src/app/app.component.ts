import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IUser } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unitTest';

  userData: any;

  constructor(
    private dataServ: DataService
  ) { }

  ngOnInit(): void {
    this.dataServ.getUserById(1).subscribe((data: IUser) => {
      this.userData = data;
    });
  }
}
