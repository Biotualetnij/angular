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
  slider3 = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Bringer_of_War_Planet.png',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saturnx.png/1024px-Saturnx.png',
    },
    {
      img: 'https://www.transparentpng.com/thumb/planet/colorful-planet-png-images-free-1QAjqO.png',
    },
    {
      img: 'https://www.pngmart.com/files/3/Space-Planet-PNG-Pic.png',
    },
    {
      img: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_320,f_auto/AW_Venus_nli6oy.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
