import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'countries-list-ngv';
  countries: any;
  constructor(private _service: CountriesService) { }

  ngOnInit(): void {

    // this._service.get().subscribe((t: any) => {
    //   this.countries = t;
    //  console.log(this.countries);
    // });


    this._service.getV2().subscribe((t: any) => {
      this.countries = t;
      console.log(t);
    });
  }

}
