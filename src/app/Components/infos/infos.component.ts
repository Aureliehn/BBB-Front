import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  public map: any
  public coords:any = [
    {name: "Halle des sports", lat:45.29638986814711, lng:3.3906543690181374},
    {name: "Lycée Lafayette", lat:45.295564, lng:3.386482},
    {name: "Salle polyvalente", lat:45.29808363379214, lng:3.390451961376416},
  ]
  public markerbbb = L.icon({
    iconUrl: 'assets/logoBBB.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41]
  })

  constructor() { }

  ngOnInit(): void {
    const centre = {
      lat: 45.3,
      lng: 3.4
    }
    this.map = L.map('map').setView(centre, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'données OpenSreetMap France',
      minZoom: 1,
      maxZoom: 20
    }).addTo(this.map)
    this.addMarker()
  }

  public addMarker(){
    for(const c of this.coords){
      console.log(c, 'c')
      const marker = L.marker([c.lat, c.lng],{
        icon: this.markerbbb}).addTo(this.map)
      marker.bindPopup(("<b>"+c.name+"</b><br/>")) 
    }
  }
}
