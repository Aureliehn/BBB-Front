import { Component, OnInit } from '@angular/core';
import { BBB } from 'src/app/bbb';
import { GaleryService } from 'src/app/Services/galery.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
public albums: BBB.album[]
  constructor(
    private galeryService: GaleryService
  ) { }

  ngOnInit(): void {
    this.getAllAlbum()
  }

  public getAllAlbum(){
    this.galeryService.getAlbum()
    .subscribe((r:[])=>{
      this.albums = r
      console.log(this.albums, 'photo')
    })
  }
}
