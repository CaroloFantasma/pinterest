import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})

export class PhotoContainerComponent implements OnInit {
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