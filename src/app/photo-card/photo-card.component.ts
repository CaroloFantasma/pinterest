import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  public imagesJSON: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/photos.json').subscribe(images => {
      this.imagesJSON = images as any[];
    });
    err => {
      console.log("Error occured.")
    }
  }
}
