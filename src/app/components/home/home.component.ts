import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slider1 = [
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      img: 'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    },
  ];
  slider2 = [
    { img: 'https://www.marchesecomp.com/wp-content/uploads/2018/11/z.jpg' },
    { img: 'https://www.marchesecomp.com/wp-content/uploads/2018/11/z.jpg' },
    { img: 'https://www.marchesecomp.com/wp-content/uploads/2018/11/z.jpg' },
    { img: 'https://www.marchesecomp.com/wp-content/uploads/2018/11/z.jpg' },
    { img: 'https://www.marchesecomp.com/wp-content/uploads/2018/11/z.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
